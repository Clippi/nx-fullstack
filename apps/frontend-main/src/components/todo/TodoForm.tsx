import { useState } from 'react'
import { trpc } from '../../trpcClient'

const TodoForm = () => {
  const utils = trpc.useContext()
  const { mutate } = trpc.todo.create.useMutation({
    onSuccess: createdTodo => {
      utils.todo.getAll.setData(undefined, prev => {
        if (!prev) return prev
        return [...prev, createdTodo]
      })
    },
  })
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate({ title })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm
