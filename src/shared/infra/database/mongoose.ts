import { connect as mongooseConnect, connection } from 'mongoose'

import configEnv from 'shared/infra/config/env'

export const connect = async (): Promise<void> => {
  await mongooseConnect(configEnv.dbUri)
}

export const close = (): Promise<void> => connection.close()
