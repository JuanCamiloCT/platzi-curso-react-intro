import './TodoItem.css'
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function TodoItem({ text, completed, onCompleted, onDeleted }) {
  return (
    <li className={`task-card ${completed && 'task-completed'}`}>
      <span onClick={
        onCompleted
      }><FaCheck className={`check-icon ${completed && 'checked'}`} /></span>
      <p>{text}</p>
      <span
        onClick={
          onDeleted
        }
        className='trash-container'><FaTrash className='trash-icon' /></span>
    </li>
  )
}

export { TodoItem }