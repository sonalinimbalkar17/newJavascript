//object literal
let myInfo = {
    firstName: 'sonali',
    lastName: 'nimbalkar',
    age: 23,
    city: 'pune',
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
myInfo.display()//sonali nimbalkar
console.log(myInfo.firstName)
console.log(myInfo.lastName)
console.log(myInfo.city)
console.log(myInfo.age)

let Info = {
    firstName: 'shweta',
    lastName: 'gorse',
    age: 23,
    city: 'pune',
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
Info.display()
console.log(Info.firstName)

//function constuctor
function student(fn, ln, rn) {
    this.firstName = fn
    this.lastName = ln
    this.rollNo = rn
    this.display = function () {
        console.log(this.firstName + this.lastName)
    }
}
let sai = new student('sai', 'nimbalkar', 20)
sai.display()
console.log(sai.firstName)
console.log(sai.lastName)
console.log(sai.rollNo)


function Vehicle(type, cl) {
    this.type = type
    this.color = cl
    this.display = function () {
        console.log(this.color)
    }
}
let audi = new Vehicle('audi', 'white')
audi.display()
console.log(audi.type)
console.log(audi.color)

//ES6 class
class Person {
    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}
let punam = new Person('punam', 'thore', 23, 100)
punam.displayName()
console.log(punam.firstName)
console.log(punam.lastName)
console.log(punam.age)

let kirti = new Person('kirti', 'pawar', 20, 12)
kirti.displayName()
console.log(kirti.firstName)



class Bank {
    constructor(fn, bal) {
        this.fullName = fn
        this.balance = bal
        this.transaction = []
    }

    deposit(amt){
        this.balance = this.balance + amt
        this.transaction.push(amt)
        return this.balance
    }

    withdrawl(amt){
        if(amt < this.balance){
            this.balance = this.balance - amt
            this.transaction.push(-amt)
        }
        else{
            console.log("Insuffcient fund")
        }
        return this.balance
    }

    lastThreeTransactions(){
        return this.transaction.slice(-3)
    }
}

let sonali=new Bank('sonali nimbalkar',50000)
console.log(sonali.withdrawl(19000))
sonali.withdrawl(19000)
sonali.withdrawl(190)
sonali.deposit(190)
console.log(sonali.lastThreeTransactions())




