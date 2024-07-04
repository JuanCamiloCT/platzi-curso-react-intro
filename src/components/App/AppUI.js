
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton';
import { TaskSkeletonLoader } from '../TaskSkeletonLoader';
import './App.css'
import { TaskContext } from '../../context/TaskContext';
import React from 'react';
import { Modal } from '../Modal';
import { TaskForm } from '../TaskForm';
import { BackgroundAnimation } from '../Background'

function AppUI() {

  const { loading,
    error,
    searchTask,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal } = React.useContext(TaskContext)
    
  return (
    <div className='App-container'>
      <div className='task-list-container'>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading &&
            <TaskSkeletonLoader />}
          {error && <p>Error!</p>}
          {(!loading && searchTask.length === 0) && <p className='no-task-message'>Agrega una tarea</p>}
          {searchTask.map(item => {
            return (
              <TodoItem
                key={item.texto}
                text={item.texto}
                completed={item.completed}
                onCompleted={() => { completeTask(item.texto) }}
                onDeleted={() => { deleteTask(item.texto) }}
              />
            )
          })}
        </TodoList>
        <CreateTodoButton setOpenModal={setOpenModal} />
      </div>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TaskForm />
        </Modal>
      )}

      <BackgroundAnimation />
    </div>
  );

}

export { AppUI }