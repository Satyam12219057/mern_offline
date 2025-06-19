
// const student = {
//   name: "Satyam",
//   age: 20,
//   address: {
//     city: "Phagwara",
//     state: "Punjab"
//   }
// };

// //normal way to extract the element
// // const city=student.address.city
// // const state=student.address.state

// //but the help of object destructuring
// const{
//     address:{city,state}
// }=student;


//named function
// function add(a,b){
//     return (a+b);
// }
// let res=add(10,30)
// console.log(res)

// const ans=(a,b)=>{
// return a+b;
// }


// const fruits = ["apple", "banana", "mango"];
// //updating element from an array
// fruits[1]="orange"
// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits)

// fruits.pop()

// //unshift()function add element at the begining
// fruits.unshift("kiwi")
// console.log(fruits)

// //shift()used to remove element from the begning
// fruits.shift()
// console.log(fruits)


// const cities = ["Delhi", "Mumbai", "Kolkata", "Chennai"];

// console.log(cities.includes("Delhi"));   // true
// console.log(cities.includes("Bangalore")); // fals

// cities.splice(1,2,"patna")
// console.log(cities)


//for-each loop in the javascript
const numbers = [10, 20, 30,40,50,60];
numbers.forEach((item,index,array)=>{
    console.log(item)
})

let myFunc=(item)=>{
    console.log(item)
}
numbers.forEach(myFunc);