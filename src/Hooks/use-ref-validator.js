import { useRef, useState } from "react"


const useRefValidator = (validator) => {
    const [inputValue, setInputValue] = useState('')
    const [inputTouched, setInputTouched] = useState(false)
    const inputRef = useRef()
    const isInputValid = validator(inputValue)
    const hasError = !isInputValid && inputTouched

    const valueChangeHandler = (event) => {
        setInputValue(event.target.value)
    }

    const inputBlurHandler = () => {
        setInputTouched(true)
    }

    const inputFocusHandler = () => {
        setInputTouched(true)
        inputRef.current.focus()
    }
    const reset = () => {
        setInputValue('')
        setInputTouched(false)
    }

    return {
        inputValue,
        isInputValid,
        hasError,
        inputRef,
        valueChangeHandler,
        inputBlurHandler,
        inputFocusHandler,
        reset
    }
}

export default useRefValidator