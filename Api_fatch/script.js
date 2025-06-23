
// console.log("hello")
// let newDate=null;
// const handleDateChange=(e)=>{
//     newDate=new Date(e.target.value);
//     console.log("newDate",newDate);
//     const targetMillisecond=newDate.getTime();
//     console.log("TAREGTMillisecond",targetMillisecond);
//     const currentTimeInMilliseconds=Date.now();
//     console.log("currentTimeInMilliseconds",currentTimeInMilliseconds)

//     const diffInSecond=(targetMillisecond-currentTimeInMilliseconds)/1000;
//     console.log("diffInSecond", diffInSecond);
// }


//promises
const request=window.fetch("https://dummyjson.com/recipes")
console.log("request",request)
console.log("request",request)


const successCb=(response)=>{
   console.log("response",response);
   const ptr2=response.json()
   ptr2.then((data)=>{
  console.log("data",data)
   });

};
const errorCb=(err)=>{
    alert("unable to get product-->",err.message)
}
request.then(successCb).catch(errorCb);