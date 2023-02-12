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
    <li className="flex items-center">
      <p className="">
        <input
          type="checkbox"
          defaultChecked={props.completed}
          className="mr-3"
          style={{ border: '1px solid green' }}
        />
        {props.title}
      </p>
      <button onClick={deleteTodo} className="primary-input border-2 rounded p-1 ml-auto">
        delete
      </button>
    </li>
  )
}

export default TodoItem
