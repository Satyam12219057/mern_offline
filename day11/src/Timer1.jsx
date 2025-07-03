
// import React from 'react'
// import {useState,useEffect} from 'react';

// const Timer1 = () => {
//     const[timeInSec,setTimeInSec]=useState(0)

//     let intervalId=null;
//    useEffect(()=>{
//     setInterval(()=>{
//      setTimeInSec((prevTime)=>{
//         const timeout=prevTime+1;
//         console.log("timeout",)
//        return prevTime+1;
//      })
//     },20000)
//    },[]);
// //useeffect will only run on iniitial render beacuse dependency array is empty
//     // useEffect(()=>{
//     //     console.log("logic",id);
//     //     return()=>{
//     //         console.log("clean up function is called",id);
//     //         clearInterval(id);
//     //     }
//     // })



//     //handle pause

//     const handelPause=()=>{
        
//     }
//     const handlePley=()=>{

//     }


//   return (
//     <div>
//         <h2>00:00:00:{timeInSec}</h2>
//         <button onClick={handelPause}>pause</button2>
//     </div>
//   )
// }

// export default Timer1




import { useEffect, useRef, useState } from "react";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0);
    const [isTimerRunning,setIsTimerRunning]=useState(true);
    console.log("🟡 : timeInSec:", timeInSec);
    const intervalRef = useRef(null);

    useEffect(() => {
        console.log("========= setting interval =====");

        intervalRef.current = setInterval(() => {
            setTimeInSec((prevTime) => {
                return prevTime + 1;
            });
        }, 1000);
    }, [isTimerRunning]);

    const handlePause = () => {
        const intervalId = intervalRef.current;
        clearInterval(intervalId);

        setIsTimerRunning(false);
    };
   const handlePlay = () => {
        if (!isTimerRunning) {
            setIsTimerRunning(true);
        }

    };

    return (
        <div>
            <h2>00:00:00{timeInSec}</h2>
            {isTimerRunning ?<button onClick={handlePause}>PAUSE</button>: <button onClick={handlePlay}>PLEY</button>}
            <button onClick={handlePause}>PAUSE</button>
        </div>
    );
};

export default App;