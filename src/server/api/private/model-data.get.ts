import { Prisma } from '@prisma/client'
import prisma from '~crm/src/utils/prisma'

interface RequestQuery {
  model: Prisma.ModelName
}

export default defineEventHandler(async (event) => {
  const queryParams = getQuery<RequestQuery>(event)

  if (!queryParams.model) {
    return createError({ statusCode: 400, message: 'Invalid query' })
  }

  const normalizedModel = queryParams.model.charAt(0).toLowerCase() + queryParams.model.slice(1) as Uncapitalize<Prisma.ModelName>
  const model = prisma[normalizedModel] as any

  if (!model) {
    return createError({ statusCode: 400, message: 'Model not found' })
  }

  try {
    const data = await model.findMany()
    return data
  }
  catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return createError({ statusCode: 400, message: error.message })
    }
    return createError({ statusCode: 500, message: 'Something went wrong', data: error })
  }
})
