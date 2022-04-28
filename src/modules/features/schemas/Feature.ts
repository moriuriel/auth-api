import mongoose, { Document } from 'mongoose'

export const FeatureSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: {
      type: String,
      required: true
    },
    active: { type: Boolean, default: true, required: true }
  },
  { timestamps: true }
)

export interface IFeature {
  name: string
  description: string
  active?: boolean
}

export interface IFeatureDocument extends IFeature, Document {}
