import todoRouter from './routers/todo'
import { router } from './trpc'

export const trpcRouter = router({
  todo: todoRouter,
})

export type AppRouter = typeof trpcRouter
