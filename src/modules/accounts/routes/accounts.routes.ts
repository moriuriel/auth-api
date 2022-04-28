import Router from 'express'
import { AccountController } from 'modules/accounts/controllers/Account'
import { validateRequestData } from 'shared/middleware'
import { CreateAccountDto } from '../dtos'

const accountRouter = Router()

const accountController = new AccountController()

accountRouter.post(
  '/',
  validateRequestData(CreateAccountDto),
  accountController.create
)
accountRouter.get('/:id', accountController.findByID)

export { accountRouter }
