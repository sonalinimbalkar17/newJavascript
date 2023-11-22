
let ulList=document.querySelector('ul')
console.log(ulList)

let inputBox=document.querySelector('input')
console.log(inputBox)

let addMeBtn=document.querySelector('#btn')
console.log(addMeBtn)

//step 1
addMeBtn.addEventListener('click',function(){
   let inputText=inputBox.value//papaya
   let newLi= document.createElement('li')//<li></li>
   newLi.textContent=inputText//<li>papaya</li>
   //step 3---function calling
   createButton(newLi)
   ulList.appendChild(newLi)
   inputBox.value=""

})

//step 2---Add btns

function createButton(liElement){
    let remove=document.createElement('button')
    remove.textContent="Remove"
    remove.className="remove"
    liElement.appendChild(remove)

    let up=document.createElement('button')
    up.textContent="Up"
    up.className="up"
    liElement.appendChild(up)

    let down=document.createElement('button')
    down.textContent="Down"
    down.className="down"
    liElement.appendChild(down)
}

//step 4

ulList.addEventListener('click',function(event){
   // console.log(event.target.tagName)
if(event.target.tagName=="BUTTON"){
    if(event.target.className=="remove"){
        let liEle=event.target.parentElement
        let ulEle=liEle.parentElement
        ulEle.removeChild(liEle)
    }

    else if (event.target.className=="up"){
        let liEle=event.target.parentElement
        let prevLi=liEle.previousElementSibling
        let ulList=liEle.parentElement
        if(prevLi){
            ulList.insertBefore(liEle,prevLi)
        }
    }
    else if(event.target.className=="down"){
        let liEle=event.target.parentElement
        let nextLi=liEle.nextElementSibling
        let ulList=liEle.parentElement
        if(nextLi){
            ulList.insertBefore(nextLi,liEle)
        }
    }
}
})