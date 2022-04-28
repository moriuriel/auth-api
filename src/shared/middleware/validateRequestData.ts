import { NextFunction, Request, Response } from 'express'
import { validate } from 'class-validator'
import { plainToInstance } from 'class-transformer'
import { StatusCodes } from 'http-status-codes'

export const validateRequestData = (dtoClass: any) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    const output: any = plainToInstance(dtoClass, req.body)
    const errors = await validate(output)

    if (errors.length > 0) {
      console.log(errors)
      let errorTexts: any[] = []
      for (const errorItem of errors) {
        errorTexts = errorTexts.concat({
          property: errorItem.property,
          constraints: errorItem.constraints
        })
      }
      res.status(StatusCodes.BAD_REQUEST).send(errorTexts)
    } else {
      next()
    }
  }
}
