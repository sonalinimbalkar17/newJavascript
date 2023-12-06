//promise combinators
function fetchUser(id) {
    return fetch(`https://reqres.in/api/users?page=${id}`)

        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (response) {
            console.log(response.data)
        })
 }
fetchUser(2)


function getUsers() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let a1 = 100
            let a2 = 10
            if (a1 == a2) {
                resolve('hey')
            }
            else {
                reject('byy')
            }
        }, 1000)
    })

}
// Promise.all() --- parallel promises -- 4 ---> 
// return array--[1,2,3,4]
// If any one of promise is rejected , it will throw error

// Promise.all([
//     fetchUser(1),
//     fetchUser(2),
//     fetchUser(3),
//     getUsers()//reject---error
// ])
// .then(function(arr){
//     console.log(arr)
// })

//promise.allSettled()
//show 4 promises with reason

// Promise.allSettled([
//     fetchUser(1),
//     fetchUser(2),
//     getUsers(),
//     fetchUser(3)
// ])
// .then(function(arr){
//     console.log(arr)
// })

//promise.race()
//jo 1st exicute hoga uska output aayega

// Promise.race([
//     fetchUser(2),
//     fetchUser(3)

// ])
// .then(function(res){
//     console.log(res)
// })

//promise.any()---1st pe shout circuit kr dega----reject ko ignore kr dega
Promise.any([
    getUsers(),
    fetchUser(2),
    fetchUser(3)

])
.then(function(res){
    console.log(res)
})