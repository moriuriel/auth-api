import express from 'express'
import { appRouter } from 'shared/http/routes'

const app = express()

app.use('/v1', appRouter)

export { app }
