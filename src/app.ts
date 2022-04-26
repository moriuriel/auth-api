import 'reflect-metadata'
import express, { Express } from 'express'
import expressPino from 'express-pino-logger'
import 'shared/container'

import { appRouter } from 'shared/http/routes'
import logger from 'shared/infra/config/logger'

async function setupApp(): Promise<Express> {
  const app = express()
  app.use(express.json())
  app.use(
    expressPino({
      logger
    })
  )

  app.use('/v1', appRouter)

  return app
}
export { setupApp }
