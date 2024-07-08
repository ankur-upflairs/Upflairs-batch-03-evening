let data =[
    {id:1,name:'anil',image:'https://picsum.photos/200/300',remark:'good',gender:'male',age:20},
    {id:2,name:'divya',image:'https://picsum.photos/200/300',remark:'good',gender:'female',age:17},
    {id:3,name:'ajay',image:'https://picsum.photos/200/300',remark:'bad',gender:'male',age:20},
    {id:4,name:'anish',image:'https://picsum.photos/200/300',remark:'very bad',gender:'male',age:12},

]

import React from 'react'
import Student from './Student'
import Minor from './Minor'


function Students() {
    let style={display:'flex',flexWrap:"wrap",justifyContent:'space-between'}
   
     return (
       <div style={style}>
           {data.map((value,index,arr)=>{
               return <>
               {value.age >= 18?<Student {...value} />:<Minor/>}
               </>
           })}
       </div>
     )
   }
   






// function Students() {
//  let style={display:'flex',flexWrap:"wrap",justifyContent:'space-between'}

//   return (
//     <div style={style}>
//         {data.map((value,index,arr)=>{
//             return <Student {...value} />
//         })}
//     </div>
//   )
// }







// function Students() {
//     // spread operator => seperate all the values of array or object 
//     // let arr=[3,4,56]
//     // console.log(arr)
//     // console.log(arr[0],arr[1],arr[2])
//     // console.log(...arr)
//     // let arr1=[...arr,5]
//     // console.log(arr1)


//   return (
//     <div style={{display:'flex',flexWrap:"wrap",justifyContent:'space-between'}}>
//       <Student name={data[0].name} image={data[0].image} remark={data[0].remark} />
//       <Student name={data[1].name} image={data[1].image} remark={data[1].remark} />
//       {/* <Student name={data[2].name} image={data[2].image} remark={data[2].remark} /> */}
//       <Student {...data[2]} />
//         <Student {...data[3]} />

//     </div>
//   )
// }

export default Students

