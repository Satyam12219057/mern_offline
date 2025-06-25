const timerTextElem=document.getElementById("timer-text");
let timeInSec=0;
 setInterval(()=>{
    timeInSec++
    console.log(timeInSec);
    const sec=timeInSec%60;
    let min=Math.floor(timeInSec/60)
    min=min%60
    const hrs=Math.floor(timeInSec/3600);
    
    //timerTextElem.innerText=`${hrs<10? 0+hrs :hrs}:${min<10 ? 0+min :min}:${sec<10? 0+sec :sec}`
     timerTextElem.innerText=`${hrs}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
},1000);

let intervalId=setInterval(timerFunc,1000)
const  handleReset=()=>{
    timeInSec=0
    timerTextElem.innerHTML="00:00:00"

}
const handlePause=()=>{
  clearInterval(intervalId)
};
const handleResume=()=>{
    setInterval(timerFunc,1000)
}
