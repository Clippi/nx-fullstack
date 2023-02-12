import TodoForm from '../components/todo/TodoForm'
import TodoList from '../components/todo/TodoList'

const TodoView = () => {
  return (
    <div className="text-center mt-36">
      <h2 className="color-text-accent text-3xl py-4">TODOSVIEW</h2>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default TodoView
