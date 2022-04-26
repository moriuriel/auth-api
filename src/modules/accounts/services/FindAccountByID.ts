import { inject, injectable } from 'tsyringe'
import { IAccountRepository } from '../repositories/Account'

@injectable()
export class FindAccountByIDService {
  constructor(
    @inject('AccountRepository')
    private readonly accountRepository: IAccountRepository
  ) {}

  async execute(id: string) {
    return this.accountRepository.findByID(id)
  }
}
