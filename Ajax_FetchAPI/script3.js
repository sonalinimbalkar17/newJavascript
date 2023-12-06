
function getUsers(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=%{pageNumber}`)
        .then(function (res) {
            //console.log(res)//print response
            return res.json()
        })
        .then(function (res) {
            console.log(res.data)//array
            return res.data
        })
}
//getUsers(2)

//singleUser
function singleUser(id){
    return fetch(`https://reqres.in/api/users?page=${id}`)
    .then(function(res){
        console.log(res)//response
        return res.json()
    })
    .then(function(res){
        //console.log(res)//response in readable formate
        console.log(res.data[2])//singel id information
        return res.data
    })
}
//singleUser(2)

//renderhtml function
function renderHtml(el){
    document.write(`<h1>${el.id}<h1>`)
    document.write(`<h2>${el.first_name}${el.last_name}<h2>`)
    document.write(`<h2>${el.email}<h2>`)
    document.write(`<img src=${el.avatar}>`)
}

// getUsers(2)
// .then(function(arr){
//     console.log(arr[0].id)
//     return singleUser(arr[1].id)
// })
// .then(function(response){
//     console.log(response)
//     renderHtml(response)
// })

async function getUsers(pageNumber){
    let arr = await getUsers(pageNumber)
    let user = await singleUser(arr[1].id)
    renderHtml(user)
}
getUsers(1)
