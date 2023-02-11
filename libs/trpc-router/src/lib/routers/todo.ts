import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

const todos = new Map<number, Todo>()
let id = 1

const todoRouter = router({
  get: publicProcedure.input(z.object({ id: z.number() })).query(({ input }) => {
    todos.get(input.id)
  }),
  getAll: publicProcedure.query(() => {
    return Array.from(todos.values())
  }),
  create: publicProcedure.input(z.object({ title: z.string() })).mutation(({ input }) => {
    const todo = {
      id,
      title: input.title,
      completed: false,
    }
    todos.set(id, todo)
    id++
    return todo
  }),
  update: publicProcedure.input(z.object({ id: z.number(), title: z.string() })).mutation(({ input }) => {
    const todo = todos.get(input.id)
    if (!todo) {
      return null
    }
    todo.title = input.title
    return todo
  }),
  delete: publicProcedure.input(z.object({ id: z.number() })).mutation(({ input }) => {
    const todo = todos.get(input.id)
    if (!todo) {
      return null
    }
    todos.delete(input.id)
    return todo
  }),
  toggle: publicProcedure.input(z.object({ id: z.number() })).mutation(({ input }) => {
    const todo = todos.get(input.id)
    if (!todo) {
      return null
    }
    todo.completed = !todo.completed
    return todo
  }),
})

export default todoRouter
