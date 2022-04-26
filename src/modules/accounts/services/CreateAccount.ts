import { inject, injectable } from 'tsyringe'
import { IAccountRepository } from '../repositories/Account'
import { IAccount } from '../schemas/Account'

@injectable()
export class CreateAccountService {
  constructor(
    @inject('AccountRepository')
    private readonly accountRepository: IAccountRepository
  ) {}

  async execute(account: IAccount) {
    return this.accountRepository.create(account)
  }
}
