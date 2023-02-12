import { AppRouter } from '@shared/trpc'
import { trpc } from '../../trpcClient'
import { inferProcedureOutput } from '@trpc/server'

type TodoItemProps = inferProcedureOutput<AppRouter['todo']['getAll']>[number]
const TodoItem = (props: TodoItemProps) => {
  const { mutate } = trpc.todo.delete.useMutation()

  const deleteTodo = () => {
    mutate({ id: props.id })
  }
  return (
    <li>
      <div className="space-x-2">
        <input type="checkbox" defaultChecked={props.completed} />
        <span>{props.title}</span>
        <button onClick={deleteTodo} className="primary-input border-2 rounded p-1">
          delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
