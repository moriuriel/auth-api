import mongoose, { Document } from 'mongoose'

export const AccountSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true
    },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

export interface IAccount {
  name: string
  email: string
  password: number
}

export interface IAccountDocument extends IAccount, Document {}
