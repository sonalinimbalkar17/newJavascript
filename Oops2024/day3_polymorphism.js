//polymorphism
//overloading
// same class , same method , different signature
//javascript does not support function overloading
// class calculator{
//     addition(a,b){
//         console.log(a+b)
//     }
//     addition(a,b,c){
//         console.log(a+b+c)
//     }
//     addition(a,b,c,d){
//         console.log(a+b+c+d)
//     }
// }
// let sum=new calculator()
// sum.addition(5,5)//NaN
// sum.addition(5,5,5)//NaN
// sum.addition(5,5,5,5)//20

class calculator {
    addition(a, b, c, d) {
        if (a != undefined && b != undefined && c != undefined && d != undefined) {
            console.log(a + b + c + d)
        }
        else if (a != undefined && b != undefined && c != undefined) {
            console.log(a + b + c)
        }
        else if (a != undefined && b != undefined) {
            console.log(a + b)
        }
    }
}
let sum = new calculator()
sum.addition(5, 5)//10
sum.addition(5, 5, 5)//15
sum.addition(5, 5, 5, 5)//20

//overriading
// different class , same method name and same signature
class worldBank {
    save() {
        console.log('i am save for worldBank')
    }
    loan() {
        console.log('i am loan for worldBank')
    }
}

class SBI extends worldBank {
    save() {
        console.log('i am save for sbi')
    }
    loan() {
        console.log('i am loan for sbi')
    }
}

let sbi = new SBI()
sbi.save()//i am save for sbi
sbi.loan()//i am loan for sbi

