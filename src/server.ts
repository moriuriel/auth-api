import { setupApp } from 'app'
import { connect } from 'shared/infra/database/mongoose'
import configEnv from 'shared/infra/config/env'
import logger from 'shared/infra/config/logger'

async function main() {
  const app = await setupApp()

  await connect()

  app.listen(configEnv.appPort, () =>
    logger.info(`AUTH API is running on port ${configEnv.appPort} 🔒`)
  )
}

main()
