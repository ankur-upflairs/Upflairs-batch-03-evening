import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffecthook() {
    const [posts,setPosts]=useState([])

    async function getData(){
        let res=await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(res.data) 
        setPosts(res.data)       
    }

    useEffect(()=>{
        getData()
       },[])//dependency array

  return (
    <div>
      
    </div>
  )
}

export default UseEffecthook











