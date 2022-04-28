import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { container } from 'tsyringe'
import { AuthenticationAccountService } from '../services'

export class SessionController {
  async index(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authenticationAccount = container.resolve(
      AuthenticationAccountService
    )

    const access_token = await authenticationAccount.execute({
      email,
      password
    })

    return response.status(StatusCodes.OK).json({ access_token })
  }
}
