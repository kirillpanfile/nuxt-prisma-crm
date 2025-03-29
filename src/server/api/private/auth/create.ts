import type { SuperUser } from '@prisma/client'
import { Prisma } from '@prisma/client'
import JwtHelpers from '~crm/server/helpers/jwtHelpers'
import PasswordHelpers from '~crm/server/helpers/passwordHelpers'
import prisma from '~crm/utils/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody<Omit<SuperUser, 'id'>>(event)

  // IG WE ALREADY HAVE A SUPERUSER, WE DON'T NEED TO CREATE ANOTHER ONE
  const checkUserExists = await prisma.superUser.findFirst()
  if (checkUserExists) {
    return createError({ status: 400, message: 'User already exists' })
  }

  if (!body) {
    return createError({ status: 400, message: 'Invalid body' })
  }

  try {
    const user = await prisma.superUser.create({
      data: {
        email: body.email,
        password: PasswordHelpers.hashPassword(body.password),
      },
    })

    return {
      // Expires in 7 days
      token: JwtHelpers.signToken(user, 60 * 60 * 24 * 7),
    }
  }
  catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return createError({ status: 400, message: error.message })
    }
    return createError({ status: 500, message: 'Something went wrong', data: error })
  }
})
