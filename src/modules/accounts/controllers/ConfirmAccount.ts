import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { container } from 'tsyringe'
import { ConfirmAccountService } from '../services'

export class ConfirmAccountController {
  async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.body

    const confirmAccountService = container.resolve(ConfirmAccountService)

    const account = await confirmAccountService.execute(id)

    return response.status(StatusCodes.ACCEPTED).json({ account })
  }
}
