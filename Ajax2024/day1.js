//program 1
function additionA() {
    console.log("Hello World A")
}
function additionB() {
    console.log("Hello World B ")
}
//additionA()
//additionB()

//program 2
function additionD() {
    setTimeout(function () {
        console.log("Hello World D")
    }, 3000)
}
function additionC() {
    console.log("Hello World C")
}
//additionD()
//additionC()

//program 3
//async
// user create  ------ id ------- id info
function getInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("get id")
    }, 2000)

    setTimeout(function () {
        console.log('get info by id')
    }, 1000)
}
//getInfo()

//program 4
// call back hell------solution
// async ----- sync
function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log('get info by id')
            }, 1000)
        }, 2000)
    }, 3000)
}
//getInfo()

//promises
//program 1
let pro = new Promise(function (resolve, reject) {
    let a = 100
    let b = 100
    if (a == b) {
        resolve('hello')
    }
    else {
        reject('bye')
    }
})

// consuming the promise
pro.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})

//program 2
let pro2= new Promise(function(resolve,reject){
    let a=20
    let b=10
    if(a==b){
        resolve([10,20,30])
    }
    else{
        reject([11,22,33])
    }
})
pro2.then(function(arr){
    console.log(arr[0])
})
.catch(function(arr){
    console.log(arr[2])//33
})

//program 3
let pro3=new Promise(function(resolve,reject){
    let name='sonali'
    if(name.startsWith('so')){
        resolve('start with so')
    }
    else{
        reject('does not start so')
    }
})
pro3.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log('i will always execute')
})

//program 4
let pro4=new Promise(function(resolve,reject){
    let a=10
    let b=10
    if(a==b){
        resolve('heyy')
    }
    else{
    reject('bye')
    }
})
pro4.then(function(str){
    console.log(str)
    return str  + ' sonali'
})
.then(function(str){
console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log('i will always execute')
})


