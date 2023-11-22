//user defined element
{/* <body>
    <h1 id="one" class="two">Pune</h1>
    <input type="text">
    <button id="btn">Click</button>
</body> */}

let body=document.querySelector('body')
console.log(body)

body.addEventListener('click',function(event){
   // console.log(event.target)//html element
   //console.log(event.target.tagName)//captital case
   // console.log(event.target.id)//one //btn
   //console.log(event.target.className)//two
   console.log(event.target.textContent)//pune //click

})
