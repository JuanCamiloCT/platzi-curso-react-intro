import './TaskSkeletonLoader.css'

function TaskSkeletonLoader({ text, completed, onCompleted, onDeleted }) {
  return (
    <li className='item-skeleton-contaoner'>
      <span></span>
      <div></div>
      <span className='trash-container'></span>
    </li>
  )
}

export { TaskSkeletonLoader }