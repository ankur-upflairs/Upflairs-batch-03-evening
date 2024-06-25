//operator that performs some operation
//1.arithmatic 
//2.assignment 
//3.relation or comparison operator
//3.logical 


//arithmatic operator =>
//+ (addition),  - (subtraction), / ( divide ), * (multyply)
// % (modulus) - gives remainder
console.log(4 % 5)
console.log(12 ** 2)//  ** =>exponential
//assignment operators =>
// = assigns a value
// +=  => add and assign
var a=7;
a+=4;//a=a+4
console.log(a)
// -= subtract and assign
a-=5
console.log(a);

//*=
a*=2
console.log(a)
// /=
a/=2;
console.log(a)
//%=
a%=8
console.log(a)

//comparison operator =>compare 2 values and return boolean
// == equal or not
console.log(5==5) 
//===  strict equal check => check value as well as datatype
console.log(5=='5')
console.log(5==='5')
//!=  not equal
console.log(3!=8)
// < less than
console.log(4<5)
// > greate than
console.log(5 > 9)
// <= less than equal to 
// >= greater than equal to 

// logical operators
// compare two booleans and return boolean
//logical and &&
// if both side of logical and  '&&' are true than it returns true   
// otherwise return false 
console.log(true && false)
console.log(false && false)
console.log(true && true)

//logical or || => if any side of logical not (|| ) is true than it returns true
//otherwise it returns false

console.log(true || false)
console.log(false || false)
console.log(true || true)

//logical not ! => reverse the result
console.log(!false)

//unary operator => 
// ++ increment => increase value by one
// -- decrement => decrease value by one
// post increment => first use than increase
var c=45
console.log(c++)
console.log(c)
// pre increment => first increase than use

console.log(++c)
console.log(c)

//post decrement 
//pre decrement
console.log(c--)
console.log(--c)
























