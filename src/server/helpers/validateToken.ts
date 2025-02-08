import type { H3Event } from 'h3'
import JwtHelpers from './jwtHelpers'

interface ValidateJWTTokenOptions {
  sendError?: boolean
}

export default function validateJWTToken(event: H3Event, options: ValidateJWTTokenOptions = {}) {
  const token = getRequestHeader(event, 'Token')

  const handleTokenFailure = () => {
    if (options.sendError) {
      throw createError({ statusCode: 401, message: 'Unauthorized' })
    }
    return handleTokenFailure()
  }

  if (!token) {
    return handleTokenFailure()
  }

  const user = JwtHelpers.verifyToken(token)
  if (!user) {
    return handleTokenFailure()
  }

  return true
}
