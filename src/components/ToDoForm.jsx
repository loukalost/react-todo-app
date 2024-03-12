import { Button, Input, Select, SelectItem, Switch } from "@nextui-org/react";
import { useState } from "react";
import { addTodo } from "../services/Api";

function TodoForm({ onSubmit }) {
  const [formData, setformData] = useState({
    title: 'Mein super titre',
    description: 'Mein super descripzione',
    status: 'TODO',
    important: true
  })

  const handleChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(formData)
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <Input
        name="title"
        type="text"
        label="Title"
        labelPlacement="inside"
        variant="flat"
        value={formData.title}
        onChange={handleChange}
      />
      <Input
        name="description"
        type="textarea"
        label="Description"
        labelPlacement="inside"
        minRows={3}
        maxRows={10}
        isMultiline
        variant="flat"
        value={formData.description}
        onChange={handleChange}
      />
      <Select
        name="status"
        label="Status"
        variant="flat"
        defaultSelectedKeys={['TODO']}
        value={[formData.status]}
        onChange={handleChange}
      >
        <SelectItem key="TODO" value="TODO" textValue="TODO">
          To Do
        </SelectItem>
        <SelectItem key="IN PROGRESS" value="IN PROGRESS" textValue="IN PROGRESS">
          In Progress
        </SelectItem>
        <SelectItem key="DONE" value="DONE" textValue="DONE">
          Done
        </SelectItem>
        <SelectItem key="CANCELED" value="CANCELED" textValue="CANCELED">
          Canceled
        </SelectItem>
        <SelectItem key="ARCHIVED" value="ARCHIVED" textValue="ARCHIVED">
          Archived
        </SelectItem>
      </Select>
      <Switch
        label="Important"
        value={formData.important}
        isSelected={formData.important}
        onValueChange={
          (isChecked) => setformData({...formData, important: isChecked})
        }
      >
        Important
      </Switch>
      <Button type="submit">
        Envoyer
      </Button>
    </form>
  )
}

export default TodoForm