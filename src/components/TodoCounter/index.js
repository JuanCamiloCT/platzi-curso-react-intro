import React from 'react';
import './TodoCounter.css'
import { TaskContext } from '../../context/TaskContext';

function TodoCounter() {

    const {
        totalComplete: completed,
        totalTask: total,
    } = React.useContext(TaskContext)

    return (
        (total === completed) ?
            <h1>¡Excelente estas al dia! </h1>
            :
            <h1>Has completado {completed} de {total} tareas </h1>
    )
}
export { TodoCounter };
