import { inject, injectable } from 'tsyringe'
import { IFeatureRepository } from '../repositories/Feature'
import { IFeature } from '../schemas/Feature'

@injectable()
export class CreateFeatureService {
  constructor(
    @inject('FeatureRepository')
    private readonly featureRepository: IFeatureRepository
  ) {}

  async execute(feature: IFeature) {
    return this.featureRepository.create(feature)
  }
}
