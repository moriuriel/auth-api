import Router from 'express'
import {
  AccountController,
  ConfirmAccountController,
  SessionController
} from 'modules/accounts/controllers'
import { validateRequestData } from 'shared/middleware'
import ensureAuthenticated from 'shared/middleware/ensureAuthenticated'
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

accountRouter.get('/:id', ensureAuthenticated, accountController.findByID)

export { accountRouter }
