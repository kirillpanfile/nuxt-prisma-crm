import type { PrismaClientInitializationError } from '@prisma/client/runtime/library'
import { PrismaClient } from '@prisma/client'
import { createError, defineEventHandler, type EventHandlerRequest, getQuery, type H3Event, readBody } from 'h3'
import prisma from '../../lib/prisma'

enum ServerResponseErrors {
  prismaInitializationError = 'prismaInitializationError',
}

interface RequestBody {
  modelName: string
  action: 'get'
  data: any
}

async function getEverythingFromModel(event: H3Event<EventHandlerRequest>, modelName: string) {
  const query = getQuery(event) as { page: string, threshold: string }

  const skip = Number.parseInt(query.page) > 1 ? (Number.parseInt(query.page) - 1) * Number(query.threshold) : 0
  const data = await prisma[modelName].findMany({ skip, take: Number(query.threshold) })

  return {
    data: data.length ? data : [],
    totalCount: await prisma[modelName].count(),
  }
}

async function createNewEntry(modelName: string, data: any) {
  return prisma[modelName].create({ data })
}

export default defineEventHandler(async (event) => {
  const { modelName, action, data } = await readBody<RequestBody>(event)

  if (!prisma[modelName]) {
    throw createError({
      message: 'Model not found',
    })
  }

  try {
    if (action === 'get') {
      return await getEverythingFromModel(event, modelName)
    }

    if (action === 'create') {
      return await createNewEntry(modelName, data)
    }

    if (action === 'delete') {
      return await prisma[modelName].delete({ where: { id: data.id } })
    }
    if (action === 'patch') {
      return await prisma[modelName].update({ where: { id: data.id }, data })
    }
  }
  catch (error) {
    if ((error as PrismaClientInitializationError).name === 'PrismaClientInitializationError') {
      throw createError({ message: 'Prisma initialization error', data: {
        errorType: ServerResponseErrors.prismaInitializationError,
      } })
    }
  }

  throw createError({
    message: 'Invalid action',
  })
})
