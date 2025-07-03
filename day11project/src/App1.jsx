
import React from 'react'
import {useState,useEffect} from 'react'

const App1 = () => {
    const [timeInSec,setTimeInsec]=useState(0);
    console.log(timeInSec);


   useEffect(()=>{
    console.log("=======setting interval=======");
    setInterval(()=>{
        setTimeInsec((prevTime)=>{
            return prevTime+1;
        })
    },1000)
   },[]);
  return (
    <div>
        <h2>00:00:{timeInSec}</h2>
    </div>
  )
}

export default App1