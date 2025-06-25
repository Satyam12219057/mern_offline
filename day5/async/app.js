const timeDelayInMs=1000;
const callbackFunc=()=>{
console.log("hello");
}
window.setTimeout(callbackFunc,timeDelayInMs)

const setTimer=1000
var abc=1;
const callbackFunc1=()=>{
    console.log(" exexute after 1 sec")
      abc++
      console.log(abc)
}
window.setInterval(callbackFunc1,setTimer)
