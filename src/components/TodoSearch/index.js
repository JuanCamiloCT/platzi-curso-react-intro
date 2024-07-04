import React from 'react'
import './TodoSearch.css'
import { TaskContext } from '../../context/TaskContext'

function TodoSearch() {

    const {
        setSearchValue,
        searchValue
    } = React.useContext(TaskContext)

    return (
        <input
            className='todo-search-input'
            placeholder="Escribe la tarea"
            value={searchValue}
            onChange={(e) => {
                setSearchValue(e.target.value)
            }}
        />
    )
}
export { TodoSearch };