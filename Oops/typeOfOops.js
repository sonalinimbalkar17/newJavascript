// OOps Types
// 1 Object literal
// 2 Function constrautor
// 3 Es6 class
// 4 object.create()

// object literal

let sonali = {
    firstName: "sonali",
    lastName: "nimbalkar",
    age: 23
}

console.log(sonali)

// function constructor

function Person(fn, ln, ag) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag

    this.display = function () {
        console.log(this.firstName + this.lastName)
    }
}

let disha = new Person("disha", "nimbalkar", 12)
console.log(disha)
disha.display()

// Es6 class

class PersonA {
    constructor(fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    }

    display() {
        console.log(this.firstName + this.lastName)
    }
}

let kalyani = new Person("kalyani", "chavan", 26)
console.log(kalyani)
kalyani.display()


// object.create()

let obj = {
    init: function (fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    },

    display: function () {
        console.log(this.firstName + this.lastName)
    },
    country: "India"
}

let shweta = Object.create(obj)
shweta.init("shweta", "gorse", 23)
console.log(shweta)
shweta.display()
console.log(shweta.country)

// program2

let objA = {
    init: function (fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    },
    display: function () {
        console.log(this.firstName + this.lastName)
    },
    langauage:"Marathi"
}

let divya=Object.create(objA)
divya.init("divya","nimbalkar",16)
console.log(divya)
divya.display()
console.log(divya.langauage)