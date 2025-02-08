import prisma from '../../runtime/lib/prisma'

export default defineEventHandler(async () => {
  try {
    const data = await prisma.contactForm.findMany()
    return data
  }
  catch (error) {
    // @ts-expect-error - createError is not defined
    return createError({ statusCode: 500, message: error.message })
  }
})
