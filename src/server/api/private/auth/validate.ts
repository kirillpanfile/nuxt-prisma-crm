import validateJWTToken from '~crm/server/helpers/validateToken'

export default defineEventHandler(async (event) => {
  validateJWTToken(event, { sendError: true })
  return {}
})
