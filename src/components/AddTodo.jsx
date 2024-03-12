import { Button, useDisclosure } from '@nextui-org/react'
import { FaPlus } from "react-icons/fa";
import AddTodoModal from './AddTodoModal'

function AddTodo ({ onAddToDo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className='fixed'
        // className='fixed bottom-8 right-8 w-16 h-16 z-10'
        color='primary'
        radius='full'
        isIconOnly
        onClick={onOpen}
      >
        <FaPlus />
      </Button>
      <AddTodoModal 
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onAddToDo={onAddToDo}
      />
    </>
  )
}

export default AddTodo
