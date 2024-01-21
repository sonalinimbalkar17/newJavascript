// program 1
class Person {

    firstName = "diya"
    lastName = "ray"
    age = 10
    rollNo = 55

}

let sonali = new Person()
let aarti = new Person()
console.log(sonali)
console.log(aarti)

sonali.firstName = "sonali"
sonali.lastName = "nimbalkar"
sonali.age = 23
sonali.rollNo = 80
console.log(sonali)

// program 2 
class Person2 {
    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }
}
let omkar = new Person2("omkar", "pawar", 30, 10)
let sarthak = new Person2("sarthak", "kale", 34, 60)
let karan = new Person2("karan", "dev", 20, 10)

let friends = [omkar, sarthak, karan]
friends.forEach(function (el) {
    console.log(el.firstName)
    console.log(el.lastName)
    console.log(el.age)
    console.log(el.rollNo)
})

// program 3 
class Person3 {
    setFirstName(fn) {
        this.firstName = fn
    }
    getFirstName(ln) {
        console.log(this.firstName)
    }

    setLastName(ln) {
        this.lastName = ln
    }
    getLastName() {
        console.log(this.lastName)
    }
}

let piya = new Person3()
piya.setFirstName("piya")
piya.setLastName("aaher")
console.log(piya)

piya.getFirstName()
piya.getLastName()