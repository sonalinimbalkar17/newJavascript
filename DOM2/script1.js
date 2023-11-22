//button ke click pe new list and element add
{/* <h1 id="std" class="10">Students</h1>
    <ol>
    <li>Sonali</li>
    <li>Shweta</li>
    <li>Kalyani</li>
   </ol>
    <input type="text">
    <button name="btn">Click</button>
<script src="script1.js"></script>*/}

let olList=document.querySelector('ol')
console.log(olList)

let inputBox=document.querySelector('input[type="text"]')
console.log(inputBox)

let buttonEle=document.querySelector('button')
console.log(buttonEle)

buttonEle.addEventListener('click',function(){
    let inputBoxText=inputBox.value//Swati
    let newliEle= document.createElement('li') //<li></li>
    newliEle.textContent=inputBoxText//<li>swati</li>
    olList.appendChild(newliEle)
    inputBox.value=""

})

