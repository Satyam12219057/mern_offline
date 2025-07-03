//re-run the function==>function rerendring




// react re-render's cpmponents EITHER or "state"change or "probs" changes
import {useState} from "react";
import App2 from "./App2";
import App1 from "./app1";
import App33 from "./App3";
import App5 from "./App5";
const App=()=>{
  //let searchText="arun";
  const [monitor, remote]=useState();

  const handelSearch=(e)=>{
    const value=e.target.value;
    //searchText=value;
    remote(value) //change stage it cannot update the state instantly when we do next call it can print value
    console.log(monitor); 
  }

  return(
    <div>
      <h1>hello</h1>
      <input type="text"  onKeyUp={handelSearch}></input>
    <h2>{monitor}</h2>

    <h1>---------------------------------------------------</h1>

    <App2/>
    <App33/>
    <App5/>
    

    </div>
  )
}
export default App;