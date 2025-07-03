
//we are going to discussed about how we can fatch api and use data in the readable form
import React from 'react'
import {useEffect,useState} from 'react'




const App2 = () => {
    const[timeInSec,setTimeInSec]=useState(0);
    console.log(timeInSec);
    useEffect(()=>{
        console.log("=========seting Interval=====");
        setInterval(()=>{
            setTimeInSec((prevTime)=>{
              return prevTime+1;
            });
        },1000)
    },[])//this is called the dependency array
  return (
    <div>
        <h2>00:00:{timeInSec}</h2>
    </div>
  )
}

export default App2


