import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    function inputName(event) {
        // console.log(event)
        // console.log(event.target.value)
        setName(event.target.value)
        console.log(name)
    }
    function inputPass(e){
        setPassword(e.target.value)
    }
  return (
    <div>
      <form >
        <label htmlFor=""> name
            <input type="text" onChange={inputName} value={name}/>
        </label>
        <label htmlFor="">password
            <input type="password" onChange={inputPass} value={password} />
        </label>
      </form>
    </div>
  )
}

export default Form
