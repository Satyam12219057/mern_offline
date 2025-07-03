







































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





// let firstPromise=new Promise((resolve,reject)=>{
//     console.log("satyam")
//     resolve(1000)
// })

//lets do with the asnchronous code


// let firstPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("my name is love babber");
//     },1500)
//     return 1;
// });



// function sayMyName(){
//     console.log("my name a is love babber")
// }
// setTimeout(sayMyName,10000)



//then we are going to deal with then() and catch

let promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("promise Fulfilled")
    }
    else{
        reject("promise reject");
    }
});

//now i am fatching the code 
promise1.then((message)=>{
    console.log("then ka message is ",message);
}).catch((err)=>{
    console.log("Error"+ error);
})