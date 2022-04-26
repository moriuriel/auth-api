import { container } from 'tsyringe'
import {
  AccountRepository,
  IAccountRepository
} from 'modules/accounts/repositories/Account'

container.registerSingleton<IAccountRepository>(
  'AccountRepository',
  AccountRepository
)
