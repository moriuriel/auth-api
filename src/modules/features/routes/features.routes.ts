import Router from 'express'
import { validateRequestData } from 'shared/middleware'
import { FeatureController } from '../controllers/Feature'
import { CreateFeatureDto } from '../dtos'

const featureRouter = Router()

const featureController = new FeatureController()

featureRouter.post(
  '/',
  validateRequestData(CreateFeatureDto),
  featureController.create
)

export { featureRouter }
