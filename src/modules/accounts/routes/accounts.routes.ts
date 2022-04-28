import Router from 'express'
import {
  AccountController,
  ConfirmAccountController
} from 'modules/accounts/controllers'
import { validateRequestData } from 'shared/middleware'
import { CreateAccountDto } from '../dtos'

const accountRouter = Router()

const accountController = new AccountController()
const confirmAccountController = new ConfirmAccountController()

accountRouter.post(
  '/',
  validateRequestData(CreateAccountDto),
  accountController.create
)
accountRouter.get('/:id', accountController.findByID)
accountRouter.patch('/confirm', confirmAccountController.create)

export { accountRouter }
