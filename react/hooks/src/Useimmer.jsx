import React from 'react'
import { useImmer } from 'use-immer'

function Useimmerhook() {
    const [state,updateState]=useImmer(0)

    let increase=()=>{
        updateState((draft)=>{  draft=draft+1 
            return draft
          })
    }
  return (
    <div>
     <p>{state}</p>
      <p>
        <button onClick={increase}>increase</button>
      </p>
    </div>
  )
}

export default Useimmerhook
