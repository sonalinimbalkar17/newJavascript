async function getInfo(id) {
    const response = await fetch(`https://reqres.in/api/${id}`)
    //console.log(response)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
}
//getInfo(2);


function getTimer() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('hello')
        }, 2000)
    })
}

//promise.all
//with promises
// Promise.all([
//     getInfo(2),
//     getInfo(1.5),
//     getInfo(3)
// ])
//     .then(function (response) {
//         console.log(response)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })

//with async await
async function getUserAll() {
    try {
        let users = await Promise.all([
            getInfo(2),
            getInfo(1.5),
            getInfo(3)
        ])
        console.log(users)
    }
    catch {
        console.log('error occured')
    }
}
//getUserAll()


//promise.race
//with Promises
// Promise.race([
//     getInfo(2),
//     getTimer()
// ])
//     .then(function (response) {
//         console.log(response)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })

//with sysnc await
async function getUserRace() {
    try {
        let user = await Promise.race([
            getInfo(2),
            getTimer()
        ])
        console.log(user)
    }
    catch {
        console.log('error occured')
    }
}
//getUserRace()

//promise.any
//with promises
// Promise.any([
//     Promise.reject('bye'),
//     getInfo(2),
//     getTimer()
// ])
// .then(function(response){
//     console.log(response)
// })

//with async await
async function getUserAny() {
    let user = await Promise.any([
        Promise.reject('bye'),
        getInfo(2),
        getTimer()
    ])
    console.log(user)
}
//getUserAny()

//Promise.allSettled
//with promises
// Promise.allSettled([
//     Promise.reject('bye'),
//     getInfo(2),
//     getTimer()
// ])
// .then(function(res){
//     console.log(res)
// })

//with async await
async function getUserA() {
   let user= await Promise.allSettled([
        Promise.reject('bye'),
        getInfo(2),
        getTimer()
    ])
    console.log(user)
}
getUserA()