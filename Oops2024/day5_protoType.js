//function constuctor
function person(fn,ln){
    this.firstName=fn
    this.lastName=ln
    // this.display=function(){
    //     console.log(this.firstName+this.lastName)
    // }
}
let sonali=new person('sonali','nimbalkar')
console.log(sonali)
let shweta=new person('shweta','gorse')
console.log(shweta)

// Everything in js is object 
// Object__proto__ == Parent.proptype
console.log(sonali.__proto__==person.prototype)//true
person.prototype.display=function(){
    console.log(this.firstName+this.lastName)
}
person.prototype.city='pune'
sonali.display()//sonalinimbalkar
shweta.display()//shwetagorse
console.log(sonali.city)//pune
console.log(shweta.city)//pune
console.log(sonali instanceof person)//true
console.log(shweta instanceof person)//true
console.log(sonali.hasOwnProperty('firstName'))//true
console.log(shweta.hasOwnProperty('firstName'))//true

//array
let names = ["sonali","shweta"]
console.log(Array.prototype == names.__proto__)
console.log(names)
//add method on array
Array.prototype.hello = function(){
    console.log("heyy")
}




