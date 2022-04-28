import Router from 'express'
import { AccountController } from 'modules/accounts/controllers/Account'

const accountRouter = Router()

const accountController = new AccountController()

accountRouter.post('/', accountController.create)
accountRouter.get('/:id', accountController.findByID)

export { accountRouter }
