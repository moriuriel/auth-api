import { StatusCodes } from 'http-status-codes'
import { AppError } from 'shared/errors'
import { inject, injectable } from 'tsyringe'
import { IAccountRepository } from '../repositories/Account'
@injectable()
export class ConfirmAccountService {
  constructor(
    @inject('AccountRepository')
    private readonly accountRepository: IAccountRepository
  ) {}

  async execute(id: string) {
    const user = await this.accountRepository.findByID(id)

    const hasUser = !!user

    if (!hasUser) {
      throw new AppError({
        statusCode: StatusCodes.NOT_FOUND,
        message: 'Resource not found'
      })
    }

    user.confirmed = true

    return this.accountRepository.update(id, user)
  }
}
