console.log('this is index file')
//  ; (semi colons are optional)
//single line comments  by //
/* this is 
multiline comment */ 

//variable => it is a container that stores a value
//variable is a name of memory location where value is stored

//keyword variable_name;
//keywords - let ,const ,var
//variable_naming rules-1. it can only contain no.s ,alphabets,$,_(underscore)
//2. can't start with no.
// var 1a//this is wrong
var a1//this is right
//3. can't use reserve keywords
// var  for   //wrong - for is reserve keyword

// declaration
var a_1;
//initialisation
a_1=45;

//primitive data type
//1.number => it includes integer, float
var a=34;//integer
var b=45.3//float
console.log(typeof a,typeof b)
// document.write(a)

// 2.string => normal text
//can be writen in ' ' or " "
var c='panakaj'
var d="gagan"
console.log(c,d,typeof d)

//3. boolean => it represent a state(logical expression)
//that is true or false
var e=true
var f=false
console.log(e,f,typeof e)
//4.undefined => variable is declared but not initialised
//or value not assigned
var g;
var h=undefined
console.log(typeof g,typeof h)
//5. null => 
var i =null
console.log(typeof i)

//6.bigInt =>
    var j=2334345456565656n
    console.log(typeof j)
//7. symbol =>
    var symbol1=Symbol('abc')
    var symbol2=Symbol('abc')
console.log(symbol1==symbol2)
console.log(typeof symbol1)


//derived / non primitive =>

// Object => object is a datatype with key-value pairs
var obj={
    name:'anil',
    age:20
}
//values in object can be any data type including object or
//function
console.log(obj.name ,typeof obj) 

// Array =>it is not a indivisual data type , it is a type of object
var arr = [34,false,[4,5],null]
console.log(typeof arr)





