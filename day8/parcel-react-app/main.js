
//we have to import the react
import React from "react"
import ReactDOM from "react-dom/client"

const domRoot=document.getElementById("root")
const reactRoot=ReactDOM.createRoot(domRoot);

const App=()=>{
    console.log("satyam")
    return (
        <div>
            <h1>hello from react APP!</h1>
        </div>
    )
};
reactRoot.render(<App />)
