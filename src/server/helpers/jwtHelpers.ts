import process from 'node:process'
import jwt from 'jsonwebtoken'

export default class JwtHelpers {
  private static secret = process.env.JWT_SECRET as string

  static signToken(payload: any, expiresIn: number) {
    return jwt.sign(payload, this.secret, { expiresIn })
  }

  static verifyToken(token: string) {
    return jwt.verify(token, this.secret)
  }
}
