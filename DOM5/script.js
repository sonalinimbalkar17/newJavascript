//to find single element
let singleLi=document.querySelector('li')
console.log(singleLi)

//to find multiple element
let multipleLi=document.querySelectorAll('li')
console.log(multipleLi)//NodeList(4) [li, li, li, li]

//element odd => pink
//element even =>black

for(let i=0;i<multipleLi.length;i++){
    //console.log(multipleLi[i].textContent)//Mango Banana Orange Chiku

    if(i%2==0){
        multipleLi[i].style.color="pink"
    }
    else{
        multipleLi[i].style.color="black"
    }
}

 let getId=document.getElementById('one')
 console.log(getId)//html element

 let getClass=document.getElementsByClassName('two')
 console.log(getClass)//HTMLCollection [h1#one.two.three.four, one: h1#one.two.three.four, ns: h1#one.two.three.four]

 let getName=document.getElementsByName('ns')
console.log(getName)//NodeList [h1#one.two.three.four]

let getTag=document.getElementsByTagName('h1')
console.log(getTag)//HTMLCollection [h1#one.two.three.four, one: h1#one.two.three.four, ns: h1#one.two.three.four]

//--------------------------------------------------------------------

{/* <h1 id="one" class="two three four" name="nm">Fruit List</h1> */}

let element1=document.querySelector("h1")
console.log(element1)//html element
console.log(element1.className)//two three four

 console.log(element1.classList)//DOMTokenList(3) ['two', 'three', 'four', value: 'two three four']

//add()
element1.classList.add('ten')
console.log(element1.classList)//DOMTokenList(4) ['two', 'three', 'four', 'ten', value: 'two three four ten']

//remove()
element1.classList.remove('two')
console.log(element1.classList)//DOMTokenList(3) ['three', 'four', 'ten', value: 'three four ten']

//toggle()
//four
element1.classList.toggle('four')
console.log(element1.classList)//DOMTokenList(2) ['three', 'ten', value: 'three ten']

element1.classList.toggle('four')
console.log(element1.classList)//DOMTokenList(3) ['three', 'ten', 'four', value: 'three ten four']

//getAttribute()
console.log(element1.getAttribute('name'))//ns

element1.setAttribute('text','txt')
console.log(element1)//<h1 id="one" class="three ten four" name="ns" text="txt">Fruit List</h1>





















