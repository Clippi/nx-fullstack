import TodoForm from '../components/todo/TodoForm'
import TodoList from '../components/todo/TodoList'
import style from './Todo.module.css'
const TodoView = () => {
  return (
    <div className="text-center mt-36">
      <h2 className="accent-text text-3xl py-4">TODOSVIEW</h2>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default TodoView
