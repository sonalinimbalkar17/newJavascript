//program 1
var x=100
console.log(x)//100

//program 2
console.log(a1)//undefined
var a1='welcome'
console.log(a1)//welcome

// console.log(a)//error--Cannot access 'a' before initialization
// let a=10
// console.log(a)

//program 3
//execution steps
var a2
console.log(a2)//undefined
a2=50
console.log(a2)//50

let a3
console.log(a3)//undefined
a3='hii'
console.log(a3)//hii

//program 4
//function decleration
myName()//sonali
function myName(){
console.log('sonali')
}

//function expression
// myage()//error
// let myage=function(){
//     console.log('23')
// }

//program 5
var myFunction = "bye"
function myFunction(){
    console.log("hello")
}
console.log(typeof myFunction)//string

//program 6
function outer(){
    //var inner;
    console.log(inner) // undefined
    if(true){
        var inner = "inner variable"
    }
    console.log(inner) // "inner variable"
} 
outer()


