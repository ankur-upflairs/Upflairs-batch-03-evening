import React from 'react'
import { useParams } from 'react-router'

function Project() {
    // let params=useParams()
    // console.log(params)
    let {name}=useParams()
  return (
    <div>
      this is {name} project page
    </div>
  )
}

export default Project
