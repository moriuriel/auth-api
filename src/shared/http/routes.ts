import Router, { Request, Response } from 'express'
import { accountRouter } from 'modules/accounts/routes/accounts.routes'
import { featureRouter } from 'modules/features/routes/features.routes'

const appRouter = Router()

const handlerMainRouter = async (_: Request, response: Response) => {
  return response.status(200).json({ status: 'OK' })
}

appRouter.get('/', handlerMainRouter)

appRouter.use('/accounts', accountRouter)
appRouter.use('/features', featureRouter)

export { appRouter }
