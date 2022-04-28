export default {
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbUri: String(process.env.DB_URI),
  appPort: process.env.PORT,
  secret: String(process.env.JWT_SECRET)
}
