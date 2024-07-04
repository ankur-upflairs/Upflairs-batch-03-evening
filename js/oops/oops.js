class Animal{//parent class
    #vegetarian='no'
    static is_wild= true 
    constructor(legs,eye_color){
        this.legs=legs
        this.eye_color=eye_color
        
    }
    show(){
        return `animal legs = ${this.legs} and eye color = ${this.eye_color}`
    }
    sound(){
        console.log('animal makes a sound')
    }
}

let dog1=new Animal(4,'black')

console.log(dog1.eye_color)
console.log(dog1.show())
dog1.sound()
console.log(Animal.is_wild)

class Dog extends Animal{ //child class
    constructor(breed,legs,eye_color){
        super(legs,eye_color)
        this.breed=breed
    }
    sound(){
        console.log(`bhow-bhow...`)
    }
}

let pitbull=new Dog('pitbull',4,'black')

console.log(pitbull.show())
pitbull.sound()

class Bank{
    constructor(rate,time,principal){
        this.rate=rate
        this.time=time
        this.principal=principal
    }
    get interest(){
        return (this.rate*this.time*this.principal)/100
    }
    set bank_name(name){
        this.bankName=name
    }
}

let SBI=new Bank(10,2,1000)
console.log(SBI.interest)
SBI.bank_name='sbi'
console.log(SBI.bankName)
