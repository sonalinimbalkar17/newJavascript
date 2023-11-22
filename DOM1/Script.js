//<h1 id="one" class="two" name="headOne">Student</h1> 
//four ways to find elements 

//1.bytagName
let tagName=document.querySelector('h1')
console.log(tagName)

//2.byId
let id=document.querySelector('#one')
console.log(id)

//3.byClass
let byClass=document.querySelector('.two')
console.log(byClass)

//4. by using common formula
//tagName[attribute="value"]
let cf=document.querySelector('h1[name="headOne"]')
console.log(cf)

let cf1 = document.querySelector('h1[id="one"]')
console.log(cf1)

let cf2 = document.querySelector('h1[class="two"]')
console.log(cf2)

//change style color of p
document.querySelector('p')
.addEventListener('click',function(){
    document.querySelector('p').style.color="red"
})
