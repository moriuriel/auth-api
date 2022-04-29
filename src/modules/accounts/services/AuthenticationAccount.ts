import { StatusCodes } from 'http-status-codes'
import { sign } from 'jsonwebtoken'
import { AppError } from 'shared/errors'
import { IHashProvider } from 'shared/providers'
import { inject, injectable } from 'tsyringe'
import { IAccountRepository } from '../repositories/Account'
import config from 'shared/infra/config/env'

interface IAuthenticationRequest {
  email: string
  password: string
}

interface IAuthenticationResponse {
  token: string
}
@injectable()
export class AuthenticationAccountService {
  constructor(
    @inject('AccountRepository')
    private readonly accountRepository: IAccountRepository,

    @inject('BCrptyHashProvider')
    private hashProvider: IHashProvider
  ) {}

  async execute({
    email,
    password
  }: IAuthenticationRequest): Promise<IAuthenticationResponse> {
    const account = await this.accountRepository.findByEmail(email)

    const hasAccount = !!account

    if (!hasAccount) {
      throw new AppError({
        statusCode: StatusCodes.NOT_FOUND,
        message: 'Resource not found'
      })
    }

    const isActiveAccount = !account.confirmed || !account.active

    if (isActiveAccount) {
      throw new AppError({
        message: 'Account not confirmed/active',
        statusCode: StatusCodes.UNAUTHORIZED
      })
    }

    const matchedPassword = await this.hashProvider.compareHash(
      password,
      account.password
    )

    if (!matchedPassword) {
      throw new AppError({
        statusCode: StatusCodes.UNAUTHORIZED,
        message: 'Incorrect email/password combination.'
      })
    }

    const token = sign({}, config.secret, {
      subject: account.id,
      expiresIn: '1d'
    })

    return { token }
  }
}
