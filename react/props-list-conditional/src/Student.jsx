import React from 'react'

function Student(props) {
    let {name,image,remark,gender,age}=props

  return (
    <div>
      {/* <p style={{color: gender=='male'?'red':'green'}}>{name}</p> */}
      <p className={gender=='male'?'male':'female'}>{name}</p>
      <img src={image} alt="" />
      <p>{remark} Student</p>
      <p>{age>=18?'adult':'minor'}</p>
    </div>
  )
}




// function Student(props) {
//     //props send are available as props object in component
//     // console.log(props)
//     //destructure => 
//     let arr=[4,5,7,9]
//     // let [a,b,c]=[6,7,8]
//     // let [a,b]=arr
//     let obj={name:'sunil',contact:123}
//     let {name,contact}=obj
//     console.log(name,contact)


//   return (
//     <div>
//       <p>{props.name}</p>
//       <img src={props.image} alt="" />
//       <p>{props.remark} Student</p>
//     </div>
//   )
// }



export default Student
