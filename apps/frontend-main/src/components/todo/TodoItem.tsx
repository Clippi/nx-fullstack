import { AppRouter } from '@shared/trpc'
import { trpc } from '../../trpcClient'
import { inferProcedureOutput } from '@trpc/server'

type TodoItemProps = inferProcedureOutput<AppRouter['todo']['getAll']>[number]
const TodoItem = (props: TodoItemProps) => {
  const { mutate } = trpc.todo.delete.useMutation()

  return (
    <li key={props.id}>
      <div>
        <input type="checkbox" defaultChecked={props.completed} />
        <span>{props.title}</span>
        <button>delete</button>
      </div>
    </li>
  )
}

export default TodoItem
