let x=45

let person={
    firstName:'pankaj',
    lastName:'singh'
}

function sum(a,b){
    return a+b
}
//first method of exporting
// module.exports.x=x
// module.exports.person=person
// exports.sum=sum

//second method
module.exports={x,person,sum}

 //third method
// module.exports=sum




