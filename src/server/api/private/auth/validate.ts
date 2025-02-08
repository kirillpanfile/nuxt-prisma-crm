import validateJWTToken from '../../../helpers/validateToken'

export default defineEventHandler(async (event) => {
  validateJWTToken(event, { sendError: true })
  return {}
})
