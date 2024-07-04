import React from "react"
import ReactDom from 'react-dom'
import './BackgroundAnimation.css'

function BackgroundAnimation() {
    return ReactDom.createPortal(
        <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     </div>,
        document.getElementById('background')
    )
}

export { BackgroundAnimation }