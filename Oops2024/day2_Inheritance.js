class student {
    constructor(fn, ln, adhar) {
        this.firstName = fn
        this.lastName = ln
        this.adharNo = adhar
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class teacher {
    constructor(fn, ln, adhar, sl) {
        this.firstName = fn
        this.lastName = ln
        this.adharNo = adhar
        this.salary = sl
    }

    displayName() {
        console.log(this.firstName + this.lastName)
    }

    displaySalary() {
        console.log(this.salary)
    }
}

let kirti = new teacher('kirti', 'pawar', 123, 50000)
console.log(kirti.firstName)
console.log(kirti.lastName)
console.log(kirti.adharNo)
console.log(kirti.salary)
kirti.displayName()
kirti.displaySalary()

let divya = new teacher('divya', 'ray', 123)
console.log(divya.firstName)
console.log(divya.lastName)
console.log(divya.adharNo)
divya.displayName()

//avoid repetation
//inheritance
//program 1
class Student {
    constructor(fn, ln, adhar) {
        this.firstName = fn
        this.lastName = ln
        this.adharNo = adhar
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}
//without constuctor
class Teacher extends Student {
    salary = 30000
    displaySalary() {
        console.log(this.salary)
    }
}

let omkar = new Teacher('omkar', 'nimbalkar', 123)
console.log(omkar.firstName)
console.log(omkar.lastName)
console.log(omkar.adharNo)
console.log(omkar.salary)
omkar.displayName()
omkar.displaySalary()

//program 2
class StudentA {
    constructor(fn, ln, adhar) {
        this.firstName = fn
        this.lastName = ln
        this.adharNo = adhar
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class TeacherA extends StudentA {
    constructor(fn, ln, adhar, salary) {
        super(fn, ln, adhar)
        this.salary = salary
    }
    displaySalary() {
        console.log(this.salary)
    }
}

let manoj = new TeacherA('manoj', 'kale', 123, 30000)
console.log(manoj.firstName)
console.log(manoj.lastName)
console.log(manoj.adharNo)
console.log(manoj.salary)
manoj.displayName()
manoj.displaySalary()

//program 3
class GrandFather {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }
    displayGName() {
        console.log(this.firstName + this.lastName)
    }
}

class Father extends GrandFather {
    constructor(fn, ln, ffn) {
        super(fn, ln)
        this.fName = ffn
    }
    displayFName() {
        console.log(this.fName + this.lastName)
    }
}

class Son extends Father {
    constructor(fn, ln, ffn, ssn) {
        super(fn, ln, ffn)
        this.sName = ssn
    }
    displaySName() {
        console.log(this.sName + this.lastName)
    }
}

let sai = new Son('shivaji', 'nimbalkar', 'dattu', 'sai')
console.log(sai.firstName)
console.log(sai.lastName)
console.log(sai.sName)
console.log(sai.fName)
sai.displayGName()
sai.displayFName()
sai.displaySName()

//program 4
class Mother {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }
    displayMName() {
        console.log(this.firstName + this.lastName)
    }
}
class son extends Mother {
    constructor(fn, ln, sn) {
        super(fn, ln)
        this.sName = sn
    }
    displaySName() {
        console.log(this.sName + this.lastName)
    }
}
class Daughter extends Mother{
    constructor(fn,ln, dn){
        super(fn,ln,)
        this.dName=dn
    }
    displayDName(){
        console.log(this.dName+this.lastName)
    }
}
let sahil=new son('nirmala','nimbalakr','sahil')
console.log(sahil.firstName)
console.log(sahil.lastName)
console.log(sahil.sName)
sahil.displayMName()
sahil.displaySName()

let aarti=new Daughter('nirmala','nimbalakr','aarti')
console.log(aarti.firstName)
console.log(aarti.lastName)
console.log(aarti.dName)
aarti.displayMName()
aarti.displayDName()


