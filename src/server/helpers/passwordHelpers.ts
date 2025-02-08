import crypto from 'node:crypto'

export default class PasswordHelpers {
  static hashPassword(password: string): string {
    return crypto.createHash('sha256').update(password).digest('hex')
  }

  static comparePassword(password: string, hash: string): boolean {
    return this.hashPassword(password) === hash
  }
}
