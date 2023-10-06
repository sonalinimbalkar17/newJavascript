//Oops(object oriented programming system)
//javascript
//object literal---one memory


let info={
    //property:value
    //key:value
    //method==function
    firstName:'sonali',
    lastName:'nimbalkar',
    age:23,
    skill:['python','java','javascript'],
    firstName:'aarti',
    display:function(){
        console.log(this.firstName+ this.lastName)
    }
}
console.log(info)//object
info.display()//aartinimbalkar

//Object- the property will be always string
//object will not store the value by index
//there cannot be duplicate property inside a object


//four basic operation on object
// retrive //update  //add  //delete
let info2={
    firstName:"shweta",
    lastName:"gorse",
    age:22,
    skill:['python','java','javascript']
}
//Retrive (dot notation and bracket notation)
console.log(info2.firstName)//shweta
console.log(info2['firstName'])//shweta

//Update
console.log(info2.lastName='dani')//dani
console.log(info2['age']='28')//28

//add
info2.city='pune'
info2['langauge']='hindi'
console.log(info2)

//delete
delete info2.firstName
delete info2['lastName']
console.log(info2)

//loop (array)
let cities=['pune','mumbai','nashik','thane']

for(let i=0;i<cities.length;i++){
    //console.log(i)//0 1 2 3
    console.log(cities[i])//elements
}

//defining one object

let vehicle={
    color:'red',
    type:'SUV',
    city:'pune',
    regNo:123
}
console.log(vehicle[0])//undefined

//dot notation will not work inside the in loop
//bracket notation will work

for(let key in vehicle){
    console.log(key)//color //type //city//regNo
    //console.log(vehicle.key)//undefined
    console.log(key,vehicle[key])//key and value both print

}

//item
vehicle={
    color:'red',
    type:'SUV',
    city:'pune',
    regNo:123
}

//loop
for(let x of Object.keys(vehicle)){
    console.log(x)//print keys
    
}
for (let y of Object.values(vehicle)){
    console.log(y)//print value
}

for(let z of Object.entries(vehicle)){
    console.log(z)//key and value both
}

