import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { trpcRouter } from '@shared/trpc'
import cors from 'cors'

const start = async () => {
  const app = express()

  app.use(cors())
  app.use('/api', trpcExpress.createExpressMiddleware({ router: trpcRouter }))

  const server = app.listen(process.env.PORT || 3001, () => {
    console.log(`Server started at http://localhost:${process.env.PORT || 3001}`)
  })
}

export default start
