import React from 'react'

function Events() {
    let msg = () => {
        alert('you clicked a button')
    }
    let count = 0
    let show = (name) => {
        alert(`you clicked a button ${name}`)
    }
    let increase = () => {
        count++;
        alert(`clicked ${count} times`)
    }
    return (
        <div>
            <button onClick={msg} >click here</button>
            <button onClick={() => alert('hello')}>click here</button>
            <button onClick={() => show('gagan')} >function with arguments</button><br />
            <p>{count}</p>
            <button onClick={increase}>increase</button>
        </div>
    )
}

export default Events
