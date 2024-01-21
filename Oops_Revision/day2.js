//program 1
//object literal
let priti = {
    firstName: 'sonali',
    lastName: 'nimbalkar',
    age: 22,
    rollNo: 40,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
priti.display()
console.log(priti)

//program 2
//function constuctor
function person(fn, ln, ag, rn) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
    // this.display=function(){
    //     console.log(this.firstName+this.lastName)
    // }
}
let shweta = new person('shweta', 'gorse', 23, 50)
console.log(shweta)

person.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}
console.log(shweta instanceof person)//true
shweta.display()

// Every object has one _proto_ === Parent.protype
console.log(shweta._proto_ === person.prototype)//false

//program 3
let names = ["sonali", "shweta", "kalyani", "swati"]
console.log(names)
names.push("shital")

console.log(names._proto_ == Array.prototype)
Array.prototype.hello = function () {
    console.log("heyy")
}
names.hello()
console.log(names instanceof Array)//true

//program 4
function Vehicle(cl, ty) {
    this.color = cl
    this.type = ty
    // this.country = "India"
    // this.displayColor = function(){
    //     console.log(this.color)
    // }
}

let maruti = new Vehicle("white", "sedane")
let audi = new Vehicle("blue", "SUV")

console.log(maruti)
console.log(audi)

Vehicle.prototype.country = "India"
console.log(maruti.country)//india 
console.log(audi.country)//india
console.log(audi.hasOwnProperty('color'))//true
console.log(audi.hasOwnProperty('country'))//false


Vehicle.prototype.displayColor = function () {
    console.log(this.color)
}
console.log(maruti)

//program 5
//Es6 class 
class student {
    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }
    display() {
        console.log(this.age)

    }
}
let disha = new student('disha', 'nimbalkar', 16, 70)
console.log(disha)

//program 6
// Object.create()
let obj = {
    init:function(fn,ln,ag,rn){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rn
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let kirti = Object.create(obj)
console.log(kirti)
kirti.init("kirti","pawar",20,10)
console.log(kirti)
kirti.display()

