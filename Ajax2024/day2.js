//program 1
//sync
function additionA() {
    console.log('print A')
}
function additionB() {
    console.log('print B')
}
additionA()
additionB()

//program 2
//async
function additionC() {
    setTimeout(function () {
        console.log('print C')
    }, 3000)
}
function additionD() {
    console.log('print D')
}
additionC()
additionD()

//program 3
//async
function getInfo() {
    setTimeout(function () {
        console.log('create user')
    }, 3000)

    setTimeout(function () {
        console.log('get id')
    }, 2000)

    setTimeout(function () {
        console.log('get info')
    }, 1000)
}
//getInfo()

//program 4
//async---------sync
//call back hell------solution
function getInfo() {
    setTimeout(function () {
        console.log('create user')
        setTimeout(function () {
            console.log('get id')
            setTimeout(function () {
                console.log('get info')
            }, 1000)
        }, 2000)
    }, 3000)
}
//getInfo()

//call back hell------tightly coupled code----cant reuse
//promises----- soltution
function userCreated() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('user created')
        }, 3000)
    })
}
function userId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('get id')
        }, 2000)
    })
}
function getInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('get info')
        }, 1000)
    })
}

// userCreated()
//     .then(function (str) {
//         console.log(str)
//         return userId()
//     })
//     .then(function(str){
//         console.log(str)
//         return getInfo()
//     })
//     .then(function(str){
//         console.log(str)
//     })
//     .catch(function(str){
//         console.log(str)
//     })
//     .finally(function(){
//         console.log('i will always execute')
//     })

     //async await
     async function getUserInfo(){
        let a1=await userCreated()
        console.log(a1)

        let a2=await userId()
        console.log(a2)

        let a3=await getInfo()
        console.log(a3)
     }
     getUserInfo()

