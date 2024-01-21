
function getUserPageWise(pageNo) {
    return fetch(`https://reqres.in/api/users?page=${pageNo}`)
        .then(function (response) {
            //console.log(response)
            return response.json()
        })
        .then(function (response) {
            console.log(response.data)
            return response.data
        })
}
//getUserPageWise(2)

//single user
function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            //console.log(response)
            return response.json()
        })
        .then(function (response) {
            console.log(response)
            return response.data
        })

}
//getSingleUser(2)

//show page
function renderHtml(user) {
    document.write(`<h1>${user.first_name}${user.last_name}</h1>`)
    document.write(`<p>${user.email}${user.id}</p>`)
    document.write(`<img src=${user.avatar}>`)
}

//using then
// getUserPageWise(2)
// .then(function(users){
//     let id=users[1].id//array
//     return getSingleUser(id)//object
// })
// .then(function(user){
//     //console.log(user)
//     renderHtml(user)
// })

//using async await
async function getInfo(pageNo) {
    let users = await getUserPageWise(pageNo)
    let id = users[3].id
    let user = await getSingleUser(id)
    renderHtml(user)
}
//getInfo(2)


//promise combinators 
//Promise.all
//1 reject state then short circuit
async function promiseAll() {
    let users = await Promise.all([
        Promise.resolve('hey'),
        Promise.reject('bye'),
        Promise.resolve('hello')
    ])
    console.log(users)
}
//promiseAll()

//promise.race
//run first execute state
function addTime(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('hello')
        },3000)
    })
}
function addTime2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Bye')
        },2000)
    })
}

async function PromiseRace(){
    let a= await Promise.race([
        addTime(),
        addTime2()
    ])
    console.log(a)
}
//PromiseRace()

// Promise.any()
//print resolve state only ignore reject state
async function PromiseAny(){
    let b = await Promise.any([
        Promise.reject("bye"),
        Promise.resolve("hello"),
        Promise.reject("hello")
    ])
    console.log(b)
}
//PromiseAny()


// Promise.allSettled()
//print all state with reason
async function PromiseAllSettled(){
    let c= await Promise.allSettled([
        Promise.reject("bye"),
        Promise.resolve("hello"),
        Promise.resolve("hello")
    ])
    console.log(c)
}
PromiseAllSettled()