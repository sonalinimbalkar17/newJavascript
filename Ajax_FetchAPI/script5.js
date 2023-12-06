//Promise combinator ==> parallel execution 

function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
}


function getUsers() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('good byy')
        }, 1)
    })
}

//1. Promise.all  => shortcircuit at reject state
async function getAllUsers() {

    try {
        let result = await Promise.all([
            getSingleUser(2),
            getSingleUser(1),
            getUsers(),
            getSingleUser(3)
        ])
        console.log(result)
    }
    catch {
        console.log("error occure")
    }
}
getAllUsers()


//2. Promise.Allsettled ==> execute both reject and resolve
async function getAllSettledUsers() {
    let aa = await Promise.allSettled([
        getSingleUser(2),
        getUsers(),
        getSingleUser(3)
    ])
    console.log(aa)
}
getAllSettledUsers()

//3. Promise.race  => whoever reached first give response
async function getRaceUsers() {
    try {
        let bb = await Promise.race([
            getSingleUser(2),
            getUsers(),
        ])
        console.log(bb)
    }
    catch {
        console.log('error at race')
    }

}
getRaceUsers()

//4. Promise.any => shortcircuit at first resolve state
async function getAnyUsers() {
    let cc = await Promise.any([
        getUsers(),
        getSingleUser(2)
    ])
    console.log(cc)
}
getAnyUsers()
