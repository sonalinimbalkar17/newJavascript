//Nullish operator 
// undefined and null

let variable = undefined;
let variable2 = 'hello'

let result = variable ?? 'default'
let result2 = variable2 ?? 'default'
console.log(result)//default
console.log(result2)//hello

// Null Coalesing operator 
let variable3 = null;
let variable4 = 'sonali'
let variable5 = 5 < 3

let res = variable3 || "default-a"
let res2 = variable4 || "default-b"
let res3 = variable5 || "default-c"
console.log(res)//default-a
console.log(res2)//sonali
console.log(res3)//default-c

// short circuit 

//and operator
let a1 = 100 > 70 && 10 == 10
let a2 = 'sonali' && 'nimbalkar'
let a3 = 'hello' && 100
let a4 = 10 < 5 && 20 > 10
let a5 = 5 == 5 && null
console.log(a1)//true
console.log(a2)//nimbalkar
console.log(a3)//100
console.log(a4)//false
console.log(a5)//null

//or operator
let b1 = 5 > 4 || 'hello'
let b2 = 'sonali' || 'nimbalkar'
let b3 = 4 < 1 || 'hello'
console.log(b1)//true
console.log(b2)//sonali
console.log(b3)//hello


function greet(name){
    if(name){
        console.log("hello "+ name)
    }
    else {
        console.log("hello guest")
    }
}
greet('sonali')//hello sonali
greet()//hello guest


function greet2(name){
    name=name||'guest'
    console.log('hello '+ name)
}
greet2()//hello guest
greet2('am sonaa')//hello am sonaa





