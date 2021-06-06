import './App.css';
import React, { useState } from 'react'
import Form from './Components/Forms/Form'
import Form2 from './Components/Forms/Form2'
import Button from './Components/UI/Button'

function App() {
  const [isForm1, setIsForm1] = useState(true)
  const changeFormhandler = () => {
    setIsForm1(isForm1 => !isForm1)
  }
  return (
    <div className="App" style = {{width:"40%", margin:"auto", backgroundColor:"gray" , padding:"20px", borderRadius:"5px", position:"absolute", top:"20vh", left:"50%", transform:"translateX(-50%)"}}>
      {isForm1 ? <Form /> : <Form2 />}
      <div style = {{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Button onClick = {changeFormhandler}>Toggle Form</Button>
      </div>
    </div>
  );
}

export default App;
