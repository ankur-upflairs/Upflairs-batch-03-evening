import React, { useState } from 'react'
// [
//     // {text:text,isUpdate:false}
// ]
function UseState() {
    const [state, setState] = useState(0)
    const [todo, setTodo] = useState([])
    const [text, setText] = useState('')
    const [updateText, setUpdateText] = useState('')

    let addTodo = () => {
        //first spread old value than add new value
        // setTodo([...todo,text])
        //second make a copy of array than mutate it
        let newtodo = [...todo]
        newtodo.push({ task: text, isUpdate: false })
        setTodo(newtodo)
        setText('')
    }
    let deleteTodo = (index) => {
        setTodo(todo.filter((v, i) => i != index))

    }
    let updateTodo = (index) => {
        let newTodo = todo.map((v,i)=>{
            v.isUpdate=false
            return v
        })
        
        newTodo[index].isUpdate = true
        setTodo(newTodo)
        setUpdateText(newTodo[index].task)
    }
    let updatedTodo=(index)=>{
        let newTodo=[...todo]
        newTodo[index].task=updateText
        newTodo[index].isUpdate=false
        setTodo(newTodo)

    }
    let increase = () => {
        // setState(state+1)
        // setState(state+1)
        // setState(state+1)
        // setState(state+1)
        // setState(preValue=>preValue+1)        
        // setState(preValue=>preValue+1)
        // setState(preValue=>preValue+1)
        // setState(preValue=>preValue+1)
    }



    return (
        <div>
            <p>{state}</p>
            <button onClick={increase}>increase</button>
            <br />
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={addTodo}>add</button>
            <ul>
                {todo.map((v, i) => {
                    return <li key={i}>{v.task} <button onClick={() => deleteTodo(i)}>delete</button>
                        {!v.isUpdate ? <button onClick={() => { updateTodo(i) }}>update</button> : <>
                            <input type="text" onChange={(e) => setUpdateText(e.target.value)} value={updateText} />
                            <button onClick={()=>updatedTodo(i)}>save</button>
                        </>}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default UseState
