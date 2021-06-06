import React from 'react'
import './button.css'

const Button = (props) => {

    return(
        <button className="button"
        disabled={props.disabled}
        onClick={props.onClick}
        type={
            props.type || "button"
        }>{props.children}</button>
    )
}

export default Button
