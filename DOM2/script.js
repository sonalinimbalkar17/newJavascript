//button ke click pe test and color change
{/*<p id="clr">Color</p> 
   <input type="text">
<button name="button">ChangeMe</button>*/}

let pEl=document.querySelector('#clr')
console.log(pEl)

let inputBox=document.querySelector('input[type="text"]')
console.log(inputBox)

//by name
let buttonEl=document.querySelector('button')
console.log(buttonEl)

//by CF
let butEle = document.querySelector('button[name="button"]')
console.log(butEle)

butEle.addEventListener('click',function(){
    let inputBoxText=inputBox.value//pink
    pEl.textContent= inputBoxText//pink
    pEl.style.color=inputBoxText//pink
    inputBox.value=""
})