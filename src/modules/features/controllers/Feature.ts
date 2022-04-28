import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { container } from 'tsyringe'
import { CreateFeatureService } from '../services/CreateFeature'

export class FeatureController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, is_default } = request.body

    const createFeatureService = container.resolve(CreateFeatureService)

    const feature = await createFeatureService.execute({
      name,
      description,
      is_default
    })

    return response.status(StatusCodes.CREATED).json({ feature })
  }
}
