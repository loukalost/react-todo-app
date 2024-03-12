import './App.css'
import TodoList from './components/ToDoList'
import { useEffect, useState } from 'react'
import { addTodo, getTodos } from './services/Api'
import AddTodo from './components/AddTodo'

// const todos = [
//   {
//     title: 'todo n°1',
//     description: 'super description n°1'
//   },
//   {
//     title: 'todo n°2',
//     description: 'super description n°2'
//   },
//   {
//     title: 'todo n°3',
//     description: 'super description n°3'
//   },
//   {
//     title: 'todo n°4',
//     description: 'super description n°4'
//   }
// ]

function App () {
  
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const todosData = await getTodos()
      setTodos(todosData)
    }

    getData()
  }, [])

  const handleAddToDo = async (todo) => {
    await addTodo(todo)
  }

  return (
    <>
      <TodoList
        todos={todos}
      />
      <AddTodo 
        onAddToDo={handleAddToDo}
      />
    </>
  )
}

export default App
