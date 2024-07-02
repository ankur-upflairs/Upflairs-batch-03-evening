
let obj={
    name:"gagan",
    roll_no:112,
    marks:[23,45,67],
    Contact:{
        mob:1234,
        address:'kdjfkdj'
    },
    totalMarks:function(){
        //this refers to current object 
        return this.marks.reduce((acc,v,i,arr)=>acc+v,0)
    }
}
//dot notation=>
    console.log(obj.name)
let x="name"
//square notation =>
    console.log(obj[x])
    console.log(obj["marks"])

for (const key in obj) {
    console.log(obj[key])
}

let obj1={
    [x]:"pankaj"
}

console.log(obj1)


