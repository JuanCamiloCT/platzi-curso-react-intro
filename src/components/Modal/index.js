import React from "react"
import ReactDom from 'react-dom'
import './Modal.css'
import { IoClose } from "react-icons/io5";

function Modal({ children, setOpenModal }) {

    return ReactDom.createPortal(
        <div className="modal-container">
            <div className="modal-card">
                <button className="modal-button-close" onClick={() => { setOpenModal(false) }}>
                    <IoClose className="icon-close" />
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }