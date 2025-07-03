//re-rendring --->re-run the function

//components is re-render only when the state change or prop change

//state variable are given to us by react
//if the value of the state variable change--> state of components are change
import {useState} from "react"
const SearchBox=()=>{
//let searchText='hello ggd'
const [monitor,remote]=useState();

//i want to show the value enter inside the form buttom
const handleSearch=(e)=>{
//searchText=e.target.value
remote(e.target.value);
console.log(monitor);



}

   return(
     <div className="search">
        <input type="text" onKeyUp={handleSearch}></input>
        <h3>{monitor}</h3>
     </div>
   )
}
export {SearchBox}