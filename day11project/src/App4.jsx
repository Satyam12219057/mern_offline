
import React from 'react'
import {useState,useEffect,useRef} from 'react'

const App4 = () => {
    const [timeInSec,setTimeInSec]=useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const intervalRef = useRef(null); 
    useEffect(()=>{
        console.log("====setting interval=====");
        intervalRef.current=setInterval(()=>{
            setTimeInSec((prevTime)=>{
                return prevTime+1;
            });
        },1000);
    },[]);

    //this is the function which hande the 
    const handlePause=()=>{
     const intervalId=intervalRef.current;
     clearInterval(intervalId);
     setIsTimerRunning(false);

    };
    const handlePlay=()=>{
        if(!isTimerRunning){
            intervalRef.current=setInterval(()=>{
                setTimeInSec((prevTime)=>{
                return prevTime+1;
                });
            },1000);
            setIsTimerRunning(true);
        }
    };



  return (
    <div>
        <h2>00:00:{timeInSec}</h2>
        {isTimerRunning ?<button onClick={handlePause}>Pause</button>:<button onClick={handlePlay}>Play</button>}
    </div>
  )
}

export default App4