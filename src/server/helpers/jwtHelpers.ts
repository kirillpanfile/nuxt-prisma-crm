import jwt from 'jsonwebtoken'

export default class JwtHelpers {
  static signToken(payload: any, expiresIn: number) {
    const { jwtSecret } = useRuntimeConfig()
    return jwt.sign(payload, jwtSecret, { expiresIn })
  }

  static verifyToken(token: string) {
    const { jwtSecret } = useRuntimeConfig()
    return jwt.verify(token, jwtSecret)
  }
}
