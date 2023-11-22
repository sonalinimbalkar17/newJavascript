//<h1 id="one" class="two" name="hello">Welcome Mypage</h1>
//find elements in four ways
//1.tagName
let tagName=document.querySelector('h1')
console.log(tagName)

//2.byId
let byId=document.querySelector('#one')
console.log(byId)

//3.byClass
let byClass=document.querySelector('.two')
console.log(byClass)

//4.by using common formula
//tagName[attribute="value"]
let cf= document.querySelector('h1[id="one"]')
console.log(cf)

let cf1=document.querySelector('h1[class="two"]')
console.log(cf1)

let cf2=document.querySelector('h1[name="hello"]')
console.log(cf2)


//click pe text change
tagName.addEventListener('click',function(){
    tagName.textContent='Nice info'
    tagName.style.color="red"
})