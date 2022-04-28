import { StatusCodes } from 'http-status-codes'
import { IFeatureRepository } from 'modules/features/repositories/Feature'
import { AppError } from 'shared/errors'
import { IHashProvider } from 'shared/providers'
import { inject, injectable } from 'tsyringe'
import { IAccountRepository } from '../repositories/Account'
import { IAccount } from '../schemas/Account'

@injectable()
export class CreateAccountService {
  constructor(
    @inject('AccountRepository')
    private readonly accountRepository: IAccountRepository,

    @inject('BCrptyHashProvider')
    private hashProvider: IHashProvider,

    @inject('FeatureRepository')
    private readonly featureRepository: IFeatureRepository
  ) {}

  async execute({ email, name, password }: IAccount) {
    const user = await this.accountRepository.findByEmail(email)

    const isUniqueEmail = !!user

    if (isUniqueEmail) {
      throw new AppError({
        statusCode: StatusCodes.UNPROCESSABLE_ENTITY,
        message: 'Email already exists'
      })
    }

    const defaultFeatures = await this.featureRepository.findDefaultFeatures()
    console.log(defaultFeatures)

    const hashedPassword = await this.hashProvider.generateHash(password)

    return this.accountRepository.create({
      name,
      email,
      password: hashedPassword,
      active: true,
      confirmed: false,
      features: defaultFeatures?.map((feature) => feature.id)
    })
  }
}
