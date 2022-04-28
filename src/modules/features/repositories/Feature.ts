import { Model, model } from 'mongoose'
import { FeatureSchema, IFeature, IFeatureDocument } from '../schemas/Feature'

export interface IFeatureRepository {
  create(feature: IFeature): Promise<IFeatureDocument>
  findDefaultFeatures(): Promise<IFeatureDocument[] | null | undefined>
}

export class FeatureRepository implements IFeatureRepository {
  private readonly featureRespoitory: Model<IFeatureDocument>

  constructor() {
    this.featureRespoitory = model<IFeatureDocument>(
      'IFeatureDocument',
      FeatureSchema,
      'features'
    )
  }

  async create(feature: IFeature): Promise<IFeatureDocument> {
    return this.featureRespoitory.create(feature)
  }

  async findDefaultFeatures(): Promise<IFeatureDocument[] | null | undefined> {
    return this.featureRespoitory.find({ is_default: true })
  }
}
