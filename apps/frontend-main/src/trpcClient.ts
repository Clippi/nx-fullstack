import type { AppRouter } from '@shared/trpc'
import { createTRPCReact } from '@trpc/react-query'

console.log({ env: import.meta.env })
export const trpc = createTRPCReact<AppRouter>()
