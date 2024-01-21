//program 1
let friends=['shweta','kalyani','kalyani','shital']
let friends2=friends
friends2[2]='poonam'
console.log(friends)//poonam
console.log(friends2)//poonam

//spread operator
//program 1
let nums=[10,20,30,40,50,60]
function add(a,b,c,d){
    console.log(a+b+c+d)//100
}
add(...nums)

//program 2
let city = ["mumbai", "nashik", "satara"]
// city1 = city//memery => one => 
city1 = [...city] //diff memory
city1[1] = "jalana"
console.log(city)


//program 3
let s1=[10,20,30]
let s2=[40,50,60]

let s=s1.concat(s2)
console.log(s)

let p=[...s1,100,200,300,...s2]
console.log(p) //[ 10,  20, 30, 100, 200, 300, 40,  50,  60]

//program 4
let obj1 = { fn: "sonali", ln: "nimbalkar" }
let obj2 = { city: "pune", rollNo: 20}
let p1 = { ...obj1, ...obj2 }
console.log(p1)

//rest operator
function addAllEle(...a1) {
    let res = a1.reduce(function (acc, el) {
        return acc + el
    }, 0)
    return res
}
let sum = addAllEle(11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 200)
console.log(sum)

let marks=[23,56,78,90,100]

let [a1,b1,c1,...d1]=marks
console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1)//[90,100]
