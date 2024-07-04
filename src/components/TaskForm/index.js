import React from 'react'
import './TaskForm.css'
import { TaskContext } from '../../context/TaskContext'

function TaskForm() {

    const [newTask, setNewTask] = React.useState('')

    const {
        addTask,
        setOpenModal,
    } = React.useContext(TaskContext)

    const onSubmit = (e) => {
        e.preventDefault()
        setOpenModal(false)
        addTask(newTask)
    }

    const onChange = (e) => {
        setNewTask(e.target.value)
    }

    return (
        <form onSubmit={(e) => {
            onSubmit(e)
        }} className='modal-form'>
            <label>Agrega una nueva tarea</label>
            <textarea placeholder='¿Que tienes pendiente?'
                onChange={onChange}
                value={newTask}
            >
            </textarea>
            <button type='summit' className='modal-add-button'>Agregar</button>
        </form>
    )
}

export { TaskForm }