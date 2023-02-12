import {FormEvent, useState} from 'react'
import {trpc} from '../../trpcClient'

const TodoForm = () => {
  const utils = trpc.useContext()
  const {mutate} = trpc.todo.create.useMutation({
    onSuccess: createdTodo => {
      utils.todo.getAll.setData(undefined, prev => {
        if (!prev) return [createdTodo]
        return [...prev, createdTodo]
      })
    },
  })
  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate({title})
  }

  return (
    <form onSubmit={handleSubmit} className="py-3">
      <div className="flex-row space-x-3">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="rounded bg-black outline-none focus:border-pink border-2 primary-input h-auto p-1"
        />
        <button type="submit" className="primary-input p-1 border-2 rounded hover:scale-105 hover:border-green">
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm
