import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { container } from 'tsyringe'
import { CreateAccountService } from '../services/CreateAccount'

export class AccountController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body
    const createAccountService = container.resolve(CreateAccountService)

    const account = await createAccountService.execute({
      name,
      email,
      password
    })
    return response.status(StatusCodes.CREATED).json({ account })
  }
}
