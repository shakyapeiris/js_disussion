import React, {useImperativeHandle, useRef} from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef()

    const activate = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(ref, () => {
        return{
            focus : activate,
        }
    })

    return(
        <div className = {classes.Box}>
            <label htmlFor = {props.id}>{props.label}</label>
            <input disabled = {props.disabled || null} className = {props.inValid ? classes.InputInvalid : classes.InputValid} type = {props.type || "text"} onChange = {props.onChange || null} value = {props.value} onBlur = {props.onBlur} ref = {inputRef} />
        </div> 
    )
})

export default Input