import { model, Model, Types } from 'mongoose'

import {
  IAccountDocument,
  IAccount,
  AccountSchema
} from 'modules/accounts/schemas/Account'

export interface IAccountRepository {
  create(account: IAccount): Promise<IAccountDocument>
  findByID(id: string): Promise<IAccountDocument | undefined | null>
  findByEmail(email: string): Promise<IAccountDocument | undefined | null>
  update(id: string, account: IAccount): Promise<any>
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

  async findByID(id: string): Promise<IAccountDocument | undefined | null> {
    return this.accountRespoitory.findById(id)
  }

  async findByEmail(
    email: string
  ): Promise<IAccountDocument | null | undefined> {
    return this.accountRespoitory.findOne({ email })
  }

  async update(id: string, account: IAccount): Promise<any> {
    return this.accountRespoitory.findByIdAndUpdate(
      { _id: new Types.ObjectId(id) },
      account,
      {
        new: true
      }
    )
  }
}
