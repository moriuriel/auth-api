import { container } from 'tsyringe'
import {
  AccountRepository,
  IAccountRepository
} from 'modules/accounts/repositories/Account'
import {
  FeatureRepository,
  IFeatureRepository
} from 'modules/features/repositories/Feature'

container.registerSingleton<IAccountRepository>(
  'AccountRepository',
  AccountRepository
)

container.registerSingleton<IFeatureRepository>(
  'FeatureRepository',
  FeatureRepository
)
