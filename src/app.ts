import 'reflect-metadata'
import 'express-async-errors'
import express, { Express } from 'express'
import expressPino from 'express-pino-logger'
import 'shared/container'

import { connect } from 'shared/infra/database/mongoose'

import { appRouter } from 'shared/http/routes'
import logger from 'shared/infra/config/logger'
import { exceptionFilter } from 'shared/errors'

async function setupApp(): Promise<Express> {
  const app = express()

  await connect()

  app.use(express.json())

  app.use(
    expressPino({
      logger
    })
  )
  app.use('/v1', appRouter)

  app.use(exceptionFilter)

  return app
}

export { setupApp }
