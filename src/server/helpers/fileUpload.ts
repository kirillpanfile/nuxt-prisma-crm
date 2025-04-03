import { Buffer } from 'node:buffer'
import { existsSync, unlink } from 'node:fs'
import { writeFile } from 'node:fs/promises'

const fileExtensionMappings = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/svg': 'svg',
  'image/ico': 'ico',
}

export async function fileUpload(file: File) {
  let filePath = `static/${file.name}`

  const fileNameExists = existsSync(filePath)
  const fileExtension = fileExtensionMappings[file.type as keyof typeof fileExtensionMappings]

  if (fileNameExists) {
    filePath = `static/${file.name.split('.')[0]}-${Date.now()}.${fileExtension}`
  }

  const fileBuffer = await file.arrayBuffer()
  await writeFile(filePath, Buffer.from(fileBuffer))

  return filePath
}

export async function fileDelete(filePath: string) {
  if (existsSync(filePath)) {
    unlink(filePath, (err) => {
      if (err) {
        console.error(err)
      }
    })
  }
}
