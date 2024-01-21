//object literal
let sonali={
    firstName:'sonali',
    lastName:'nimbalkar',
    age:23,
    rollNo:50
}
console.log(sonali)
//four opration
//retrive
let a1=sonali.age
console.log(a1)

//add
let a2=sonali.city='pune'
console.log(a2)
console.log(sonali)

//update
let a3=sonali.age=24
console.log(a3)
console.log(sonali)

//delete
delete sonali.age
console.log(sonali)

//function constuctor
function person(fn,ln,ag){
    this.firstName=fn
    this.lastName=ln
    this.age=ag
}
let kirti=new person('kirti','pawar',20)
let piya=new person('piya','roy',30)
console.log(kirti)
console.log(piya)

//ES6 class
class student{
    firstName
    lastName
    age
    rollNo
}
let shweta=new student()
 // accessing the property and updating it outside the class
console.log(shweta)
shweta.firstName='shweta'
shweta.lastName='gorse'
shweta.age=23
shweta.rollNo=30
console.log(shweta)

 // Es6 class with constructor 
 class info{
    constructor(fn,ln,ag,rn){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.rollNo=rn
    }
 }
 let kalyani=new info('kalayni','hadole',24,50)
 console.log(kalyani)

 //object.create
 let punam=Object.create({})
 console.log(punam)//{}
 punam.firstName='punam'
 punam.lastName='rav'
 punam.age=30
 punam.rollNo=100
 console.log(punam)

 //object literal with display function
 let purvi={
    firstName:'purvi',
    lastName:'deshmuk',
    display:function(){//this=purvi
        console.log(this.firstName)
    }
 }
 purvi.display()//purvi
 console.log(purvi)

//function constuctor with display function
function teacher(fn,ln,salary){
    this.firstName=fn
    this.lastName=ln
    this.salary=salary
    this.display=function(){
        console.log(this.salary)
    }
}
let roshni=new teacher('roshni','kale',30000)
console.log(roshni)
roshni.display()

 // prototype inheritance
 // every object has one _proto_ == Parent.protype
console.log(roshni._proto_==teacher.prototype)





