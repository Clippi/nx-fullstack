import { trpc } from '../../trpcClient'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { data } = trpc.todo.getAll.useQuery()
  return (
    <ul>
      {data?.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList
