
// console.log(window)
//console.log(window.document)
console.dir(window.document)
//console.dir(document.children[0].children[1].children[0].innerText)
//  const heading=document.getElementsByTagName("h1")
//  console.log("heading:",heading);



// const heading=document.getElementsByTagName("h3")
//  console.log("heading:",heading);
//  const header=document.getElementsByTagName("a")
//  console.log("header",header)

//  heading[0].innerHTML="satyam kumar"
//  header[0].innerHtml="important"




//using the function getElement by the class
// const heading=document.getElementsByClassName("text-brown");
// console.log("heading",heading)


// const text=document.getElementById("text-1");
// text.style.backgroundColor="lime"




// //all menuplation is done by the one function'
// const title=document.querySelectorAll("h3")
// console.log("title",title);
// const textBrownElement=document.querySelectorAll(".text-brown")//for class weuse .
// console.log("text-brown",textBrownElement);
// const textPara=document.querySelectorAll("#text-1")//for id we use the #
// console.log("get element by id",textPara);

// //if the access key are not presnt then what happen
// const textPara1=document.querySelectorAll("#text-2")//for id we use the #
// console.log("get element by id",textPara1);
 

//

const parent=document.getElementById("root")
const title=document.createElement("h2")

title.innerHTML="hello javascript"
//if i want to change the style
title.style.textDecoration="underline"
title.style.textDecorationColor="magenta"
parent.append(title)

const title2=document.createElement("h4")
title.innerHTML="hello from DOM2"
title.style.backGroundColor="blue"
parent.append(title2);


//i want to do 3rd manuplation
const title3=document.createElement("a")
title3.innerHTML="this is the my new tag"//this will use to write somthing the given tag

parent.append(title3);