import express, { Express } from 'express'
import { appRouter } from 'shared/http/routes'

async function setupApp(): Promise<Express> {
  const app = express()

  app.use('/v1', appRouter)

  return app
}
export { setupApp }
