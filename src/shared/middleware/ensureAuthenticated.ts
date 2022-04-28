import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { verify } from 'jsonwebtoken'
import { AppError } from 'shared/errors'
import config from 'shared/infra/config/env'

interface ITokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function ensureAuthenticated(
  request: Request,
  _: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError({
      statusCode: StatusCodes.UNAUTHORIZED,
      message: 'JWT token is missing'
    })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, config.secret)

    const { sub } = decoded as ITokenPayload

    request.user = {
      id: sub
    }

    return next()
  } catch (err) {
    throw new AppError({
      statusCode: StatusCodes.UNAUTHORIZED,
      message: 'Invalid JWT token'
    })
  }
}
