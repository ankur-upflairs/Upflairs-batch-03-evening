import React,{useState} from 'react'

function State() {
    let [state,setState] = useState(0)
    //usestate hook returns state and a state setter function
    //you can't change state directly 
    //use setstate function to modify state
    //state is immutable
    //state is components memory and it persists (remembers ) in re-render 
    let count=0
    function increase() {
        setState(state+1)
        count++
        alert(count)
    }
  return (
    <div>
     <p> {state}</p>
     <p>{count}</p>
      <button onClick={increase}>increase</button>
    </div>
  )
}

export default State
