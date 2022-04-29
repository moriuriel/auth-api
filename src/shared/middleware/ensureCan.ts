import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { AccountRepository } from 'modules/accounts/repositories/Account'
import { AppError } from 'shared/errors'

export function can(featuresRoute: String[]) {
  return async (request: Request, _: Response, next: NextFunction) => {
    const {
      user: { id }
    } = request

    const user = await new AccountRepository().findByID(id)

    const hasUser = !!user

    if (!hasUser) {
      throw new AppError({
        message: 'User does not exists',
        statusCode: StatusCodes.BAD_REQUEST
      })
    }

    const hasFeature = user.features
      ?.map((feature) => feature)
      .some((feature) => featuresRoute.includes(feature))

    if (!hasFeature) {
      throw new AppError({
        message: 'Cannot access this feature',
        statusCode: StatusCodes.FORBIDDEN
      })
    }
    return next()
  }
}
