import { model, Model } from 'mongoose'

import {
  IAccountDocument,
  IAccount,
  AccountSchema
} from 'modules/accounts/schemas/Account'

export interface IAccountRepository {
  create(account: IAccount): Promise<IAccountDocument>
}

export class AccountRepository implements IAccountRepository {
  private readonly accountRespoitory: Model<IAccountDocument>

  constructor() {
    this.accountRespoitory = model<IAccountDocument>(
      'IAccountDocument',
      AccountSchema,
      'accounts'
    )
  }

  async create(account: IAccount): Promise<IAccountDocument> {
    return this.accountRespoitory.create(account)
  }
}
