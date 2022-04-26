import { setupApp } from 'app'

import configEnv from 'shared/infra/config/env'

async function main() {
  const app = await setupApp()

  app.listen(configEnv.appPort, () =>
    console.log(`AUTH API is running on port ${configEnv.appPort} 🔒`)
  )
}

main()
