import { setupApp } from 'app'
import configEnv from 'shared/infra/config/env'
import logger from 'shared/infra/config/logger'

async function main() {
  const app = await setupApp()

  app.listen(configEnv.appPort, () =>
    logger.info(`AUTH API is running on port ${configEnv.appPort} 🔒`)
  )
}

main()
