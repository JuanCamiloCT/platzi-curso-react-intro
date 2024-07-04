import './TodoList.css'

function TodoList({ children }) {
    return (
        <ul className='task-list-container'>
            {children}
        </ul>
    )
}
export { TodoList };