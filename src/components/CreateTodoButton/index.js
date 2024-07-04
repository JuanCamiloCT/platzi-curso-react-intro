import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
    return (
        <div className='button-create-container'>
            <button className="primary-btn" onClick={() => { setOpenModal(true) }}>+</button>
        </div>
    )
}

export { CreateTodoButton }