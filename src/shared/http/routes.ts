import Router, { Request, Response } from 'express'
import { accountRouter } from 'modules/accounts/routes/accounts.routes'

const appRouter = Router()

const handlerMainRouter = async (_: Request, response: Response) => {
  return response.status(200).json({ status: 'OK' })
}

appRouter.get('/', handlerMainRouter)

appRouter.use('/accounts', accountRouter)

export { appRouter }
