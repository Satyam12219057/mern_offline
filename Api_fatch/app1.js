







































// console.log("one")
// console.log("two")
// setTimeout(()=>{
//  console.log("hello")
// },1000)

//call back function
//we can write the call back properly
// function getData(dataId,getNextDta){
//     //2 sec
//     setTimeout(()=>{
//         console.log("data",dataId)
//         if(getNextDta){
//             getNextDta()
//         }
//     },3000)
// }
// //this kind of the  call back function become very complex
// getData(1,()=>{
//     console.log("getting data 1....")
//     getData(2,()=>{
//          console.log("getting data 2....".)
//         getData(3,()=>{
//              console.log("getting data 3....".)
//             getData(4);
//         })
//     }); 
// })