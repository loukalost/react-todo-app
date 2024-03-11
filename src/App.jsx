import { Button } from '@nextui-org/react'
import './App.css'
import TodoList from './components/ToDoList'

const todos = [
  {
    title: 'todo n°1',
    description: 'super description n°1'
  },
  {
    title: 'todo n°2',
    description: 'super description n°2'
  },
  {
    title: 'todo n°3',
    description: 'super description n°3'
  },
  {
    title: 'todo n°4',
    description: 'super description n°4'
  }
]

function App () {
  return (
    <>
      <TodoList
        todos={todos}
      />
      <Button
        color='primary'
      >
        Mon Bouton Pas Beau Avec Les Couleurs De L'Ecole
      </Button>
    </>
  )
}

export default App
