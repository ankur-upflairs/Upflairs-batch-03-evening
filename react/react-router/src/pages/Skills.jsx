import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function Skills() {
  return (
    <>    
    <table border={1} cellSpacing={0}>
        <tr>
            <th>skill name</th>
            <th>proficiency</th>
            <th>details</th>
            <th>projects</th>
        </tr>
        <tr>
            <td>html</td>
            <td>good</td>
            <td>hyper text markup text</td>
            <td><Link to={`/project/html`} >click...</Link></td>
        </tr>
        <tr>
            <td>css</td>
            <td>best</td>
            <td>casecading style sheet</td>
            <td><Link to={`/project/css`} >click...</Link></td>          

        </tr>
        <tr>
            <td>js</td>
            <td>best</td>
            <td>javascript</td>
            <td><Link to={`/project/js`} >click...</Link></td>           

        </tr>
    </table>
    <Outlet/>
    </>
  )
}

export default Skills
