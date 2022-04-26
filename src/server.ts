import { setupApp } from 'app'
import { connect } from 'shared/infra/database/mongoose'
import configEnv from 'shared/infra/config/env'

async function main() {
  const app = await setupApp()

  await connect()

  app.listen(configEnv.appPort, () =>
    console.log(`AUTH API is running on port ${configEnv.appPort} 🔒`)
  )
}

main()
