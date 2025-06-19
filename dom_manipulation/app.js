
//how  dom will perform on the given page
// const headingElement=document.getElementById("heading")

// //this way we have to modify the elemnt getting by id
// headingElement.innerHTML="<h1>this my new js code</h1>" //i can give the  text with the elemnt

// console.log(headingElement)

// headingElement.innerText="<h2>this my new js code</h2>"
// console.log(headingElement)



//now i am going to manipulate using thr id
// const headingElement=document.getElementById("res")
// //and i want to push someting inside the heading tag
// headingElement.innerHTML="<h2>this is the code to push in the div tag</h2>"
// console.log(headingElement)

//--------------------------get element by tag-----------
// const headingElement=document.getElementsByTagName("p");
// console.log(headingElement.innerHTML) //it can print the values inside the tag
// console.log(headingElement)


//-------------using get element by class NAME------

// const headingElement=document.getElementsByClassName("para");
// console.log(headingElement.innerHTML) //it can print the values inside the tag
// console.log(headingElement[0].innerHTML)
// console.log(headingElement)

//---------query selector in dom--------------
let heading1Element=document.querySelector("h1")//directly select element by id
console.log(heading1Element)

let headingElement=document.querySelector("#heading")//select element by id
console.log(headingElement)

//using queryselecterALL

let allHeading=document.querySelectorAll("h3")
console.log(allHeading)

//we have alloud to use the loop
allHeading.forEach((item,index)=>{
    console.log(item.innerHTML)
})

console.log(allHeading)

