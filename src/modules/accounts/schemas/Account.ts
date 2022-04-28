import mongoose, { Document } from 'mongoose'

export const AccountSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: { type: String, required: true },
    confirmed: { type: Boolean, default: false, required: true },
    active: { type: Boolean, default: true, required: true }
  },
  { timestamps: true }
)

export interface IAccount {
  name: string
  email: string
  password: string
  confirmed?: boolean
  active?: boolean
}

export interface IAccountDocument extends IAccount, Document {}
