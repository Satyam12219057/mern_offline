
import React from 'react'
import App2 from './App2';
import Timer1 from './Timer1';
import Timer3 from './Timer3';

const APP = () => {
   // const getDta=()=>{
    //     const response=fetch("https://dummyjson.com/users");
    //     response.then((resp)=>{
    //     //console.log("success",resp) it can print data in non-readable form

    //     //promise chaning

    //   const ptr2=resp.json();
    //    ptr2.then((res)=>{
    //      console.log(res)
    //    }).catch((err)=>{
    //    console.log(err);
    //    })
    //     })
    //     .catch((err)=>{
          
    //      console.log("error",err);
    //     })
    // }
    // getDta();
  return (
    <div>
      <h1>hello</h1>
      
     <Timer3/>
      
    </div>
  )
}

export default APP