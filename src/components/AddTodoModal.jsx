import { Button, Modal, ModalBody, ModalHeader, ModalContent, ModalFooter } from '@nextui-org/react'
import TodoForm from './ToDoForm'

function AddTodoModal ({ isOpen, onOpen, onOpenChange, onAddToDo }) {

  return (
    <Modal 
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='center'
      size='md'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Ajouter une tâche</ModalHeader>
            <ModalBody>
              <TodoForm onSubmit={onAddToDo}/>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Fermer
              </Button>
              <Button color="primary" onPress={onClose}>
                Ajouter
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default AddTodoModal