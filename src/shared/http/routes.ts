import Router, { Request, Response } from 'express'
import { AccountController } from 'modules/accounts/controllers/Account'

const appRouter = Router()

const handlerMainRouter = async (_: Request, response: Response) => {
  return response.status(200).json({ status: 'OK' })
}

appRouter.get('/', handlerMainRouter)

const accountController = new AccountController()

appRouter.post('/accounts', accountController.create)

export { appRouter }
