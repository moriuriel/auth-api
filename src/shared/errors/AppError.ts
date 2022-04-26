class AppError {
  public readonly statusCode: number
  public readonly message: string

  constructor({ statusCode = 400, message = '' }) {
    this.statusCode = statusCode
    this.message = message
  }
}

export { AppError }
