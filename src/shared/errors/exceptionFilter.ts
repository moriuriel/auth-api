import { ValidationError } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { AppError } from './AppError'

function exceptionFilter(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      statusCode: err.statusCode
    })
  }

  if (err instanceof Array && err[0] instanceof ValidationError) {
    return response.status(StatusCodes.BAD_REQUEST).json({
      status: 'error',
      massage: err,
      code: StatusCodes.BAD_REQUEST
    })
  }

  return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: 'error',
    massage: 'Internal server Error',
    code: StatusCodes.INTERNAL_SERVER_ERROR
  })
}

export { exceptionFilter }
