import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

function prismaClientSingleton() {
  console.log('prismaClientSingleton')
  if (!prisma) {
    prisma = new PrismaClient()
  }
  return prisma
}

export default prismaClientSingleton()
