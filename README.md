# CMBJS Discussion - Realtime Form Validation and Custom Hooks in React.Js.
### This Repo contains all the documents used in the CMBJS discussion held on 6th June 2021 about real-time form validation and custom hooks in react.js :boom:

You can validate forms in threeways.
  1. With the submission of form
  2. After finishing typing
  3. With every key stroke

In react js we can fetch data entered by user in two ways
  1. Using onChange event.
```javascript
       function Form (){
          const [name, setName] = useState('')
          const changeNameHandler = (event) => {
            setName(event.target.value)
          }
          return(
            <div>
              <input onChange = {changeNameHandler} />
            </div>
          )
      }
```
  2. Using useRef hook
```javascript
       function Form (){
          const name = useRef()
          return(
            <div>
              <input ref = {name} />
            </div>
          )
      }
```
<h3 style = "border-bottom:1px solid gray;">1. Checking the form validity with the submission of form</h3>
  We can check the validity of the form submitted either by disabling button or focusing the invalid fields.
  
  * Disabling the button (onChange method)
```javascript
    const Form = () => {
      const [name, setName] = useState()
      const isNameValid = name.trim().length > 6
      
      const changeNameHandler = (event) => {
        setName(event.target.value)
      }
      return(
        <div>
          <input onChange = {changeNameHandler} />
          <button type = "submit" disabled = {!isNameValid}>Submit</button>
        </div>
      )
    }
```
  * Focusing the invalid field
```javascript
    const Form = () => {
      const name = useRef()
      const isNameValid = name.current.value.trim().length > 6
      
      const submitFormHandler = (event) => {
        event.preventDefault(); //Prevent unnecessary server refreshers
        if (!isNameValid){
          name.current.focus()
          return // To break the flow
        }
      }
      return(
        <form onSubmit = {submitFormHandler}>
          <input ref = {name} />
          <button type = "submit">Submit</button>
        </form>
      )
    }
```
#### Then how can we validate the input with is touched (After finishing typing)

<h3 style = "border-bottom:1px solid gray;">2. Checking the form validity with is touched</h3>
In here we can use onBlur event to catch it and store it in a state

```javascript
    const Form = () => {
      const name = useRef()
      const [isTouched, setIsTouched] = useState(false)
      const isNameValid = name.current.value.trim().length > 6
      
      const submitFormHandler = (event) => {
        event.preventDefault(); //Prevent unnecessary server refreshers
        if (!isNameValid){
          name.current.focus()
          return // To break the flow
        }
      }
      
      const inputBlurHandler = () => {
        setIstouched(true)
      }
      return(
        <form onSubmit = {submitFormHandler}>
          <input ref = {name} onBlur = {inputBlurHandler} />
          <button type = "submit">Submit</button>
        </form>
      )
    }
```

<h3 style = "border-bottom:1px solid gray;">3. Cheking the form validity with every key stroke</h3>
To do this task as in above code snippet we can simply check the validity of the data entered by reffering the state and adding a condition.

```javascript
const isNameValid = name.current.value.trim().length > 6
```

## Finally validate all the actions and value changes we can use a boolean as follows

```javascript
const nameHasError = !isNameValid && isTouched
```

# That's it ThankYou. Just React
