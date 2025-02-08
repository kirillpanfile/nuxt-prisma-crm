import { Prisma, type SuperUser } from '@prisma/client'
import JwtHelpers from '~crm/src/server/helpers/jwtHelpers'
import PasswordHelpers from '~crm/src/server/helpers/passwordHelpers'
import prisma from '~crm/src/utils/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody<Omit<SuperUser, 'id'>>(event)

  if (!body) {
    return createError({ status: 400, message: 'Invalid body' })
  }

  try {
    const user = await prisma.superUser.findUnique({ where: { email: body.email } })
    if (!user) {
      return createError({ status: 400, message: 'Invalid credentials' })
    }

    if (!PasswordHelpers.comparePassword(body.password, user.password)) {
      return createError({ status: 400, message: 'Invalid credentials' })
    }

    return {
      // Expires in 7 days
      token: JwtHelpers.signToken(user, 60 * 60 * 24 * 7),
    }
  }
  catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return createError({ status: 400, message: error.message })
    }
    console.log(error)
    return createError({ status: 500, message: 'Something went wrong', data: error })
  }
})
