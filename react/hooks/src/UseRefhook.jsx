import React, { useRef, useState } from 'react'

function UseRefhook() {
    let count=useRef(0)
    const [state,setState]=useState(0)
    let btn=useRef(null)

    let increase=()=>{
        count.current++
        console.log(count.current)
        btn.current.style.backgroundColor='green'
    }
  return (
    <div>
      {count.current}
      <button onClick={increase} ref={btn}>incrase</button>
      <p>{state}</p>
      <button onClick={()=>setState(state+1)}>increase state</button>
    </div>
  )
}

export default UseRefhook
