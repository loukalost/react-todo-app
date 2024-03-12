import Todo from './ToDo'

function TodoList ({ todos }) {
  return (
    <div className='flex flex-col gap-4 py-4 px-4'>
      {
        todos.map((todo) => {
          return (
            <Todo
              key={todo._id}
              title={todo.title}
              description={todo.description}
            />
          )
        })
      }
    </div>
  )
}

export default TodoList
