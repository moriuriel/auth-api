import Router from 'express'
import {
  AccountController,
  ConfirmAccountController,
  SessionController
} from 'modules/accounts/controllers'
import {
  validateRequestData,
  can,
  ensureAuthenticated
} from 'shared/middleware'
import { CreateAccountDto } from '../dtos'

const accountRouter = Router()

const accountController = new AccountController()
const confirmAccountController = new ConfirmAccountController()
const sessionController = new SessionController()

accountRouter.post(
  '/',
  validateRequestData(CreateAccountDto),
  accountController.create
)
accountRouter.post('/session', sessionController.index)
accountRouter.patch('/confirm', confirmAccountController.create)

accountRouter.get(
  '/:id',
  ensureAuthenticated,
  can(['account:findById']),
  accountController.findByID
)

export { accountRouter }
