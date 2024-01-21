//program 1
let sonali = {
    firstName: 'sonali',
    lastName: 'nimbalkar',
    age: 23

}

let shweta = {
    firstName: 'shweta',
    lastName: 'gorse',
    age: 23
}

// 1 object ------> 4 lines 
// 100 object ------> 400 lines 

// template ------> object
//program 2
class Person {
    firstName
    lastName
    age
}

let kalyani = new Person()
kalyani.firstName = 'kalyani'
kalyani.lastName = 'hadole',
    kalyani.age = 23
console.log(kalyani)

//four operation
//retrive-----dot notation and bracket notation
console.log(kalyani.firstName)
console.log(kalyani['age'])

//add------dot notation and bracket notation
console.log(kalyani.city = 'pune')
console.log(kalyani['rollNo'] = 20)
console.log(kalyani)

//update----dot notation and bracket notation
kalyani.city = 'vaijapur'
kalyani['age'] = 24
console.log(kalyani)

//delete----dot notation and bracket notation
delete kalyani.city
delete kalyani['rollNo']
console.log(kalyani)

//program 3
//constuctor
class person {
    //properties
    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }
    //method
    displayAge() {
        console.log(this.age)
    }
}

let Puja = new person('puja', 'pawar', 30, 10)
console.log(Puja)
Puja.displayAge()

//program 4
//set get method
class persons {
    // properties value - set
    setFirstN(fn) {
        this.FirstN = fn
    }
    setLastN(ln) {
        this.LastN = ln
    }
    setAge(ag) {
        this.Age = ag
    }

    // properties value - get
    getFirstN() {
        console.log(this.FirstN)
    }
    getLastN() {
        console.log(this.LastN)
    }
    getAge() {
        console.log(this.Age)
    }

}

let sai=new persons()
console.log(sai)//persons {}

sai.setFirstN('sai')
sai.setLastN('nimbalkar')
sai.setAge(10)
console.log(sai)

sai.getFirstN()
sai.getLastN()
sai.getAge()

//program 5
//set get
class MyInfo {

    set firstN(fn){
        this.firstName = fn
    }
    get firstN(){
        return this.firstName
    }


    set lastN(ln){
        this.lastName = ln
    }
    get lastN(){
      return this.lastName 
    }

    set Age(ag){
        this.age = ag
    }
    get Age(){
       return this.age
    }
    
}

let disha = new MyInfo()

disha.Age = 16
disha.lastN = "disha"
disha.firstN = "nimbalkar"
console.log(disha)

console.log(disha.Age)
console.log(disha.lastN)
console.log(disha.firstN)
