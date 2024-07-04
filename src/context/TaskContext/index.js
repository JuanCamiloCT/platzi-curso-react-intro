import React from "react";
import useLocalStorage from '../../hooks/useLocalStorage'

const TaskContext = React.createContext()

function TaskProvider({ children }) {

  const [searchValue, setSearchValue] = React.useState('')

  const { item: taskList, saveItems, loading, error } = useLocalStorage('TaksListStorage', [])

  const [openModal, setOpenModal] = React.useState(false)

  const totalComplete = taskList.filter(task => !!task.completed).length

  const totalTask = taskList.length

  const searchTask = taskList.filter((task) =>
    task.texto.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  )

  const completeTask = (text) => {
    const newTasks = [...taskList]

    const i = newTasks.findIndex((task) =>
      task.texto === text
    )
    newTasks[i].completed = true

    saveItems(newTasks)
  }

  const deleteTask = (text) => {
    const newTasks = [...taskList]

    const i = newTasks.findIndex((task) =>
      task.texto === text
    )
    newTasks.splice(i, 1)

    saveItems(newTasks)
  }

  const addTask = (task) => {
    const newTasks = [...taskList]

    newTasks.push({
      texto: task,
      completed: false
    })

    saveItems(newTasks)
  }

  return (
    <TaskContext.Provider value={{
      loading,
      error,
      totalComplete,
      totalTask,
      searchValue,
      setSearchValue,
      searchTask,
      completeTask,
      deleteTask,
      openModal,
      setOpenModal,
      addTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider, TaskContext }