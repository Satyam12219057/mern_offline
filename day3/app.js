
//iteration on the array
//const arr=["cat","dog","elephant","tiger"]
//iteration through loop 

//itration for loop
// for(let i=0;i<arr.length;i++){
//     const ele=arr[i]
//     console.log(ele,i)
// }


//  for(let i in arr){
//     //all key one-by-one avoided
//     const ele=arr[i]
//     console.log(ele,i)
//  }

//   for(let i of arr){
//     //all the value one-by-one avoided
//     const ele=arr[i]
//     console.log(ele,i)
//  }


 //for each loop to iterate

const arr=["cat","dog","elephant","tiger"]
const myFunc=(item)=>{
    console.log(item);
 }

 arr.forEach((item)=>{
  console.log(item)
 })
 arr.forEach(myFunc);

 