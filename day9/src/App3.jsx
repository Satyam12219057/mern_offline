import React from 'react'
import {useState} from "react"

const App3=()=>{
    const [arr,setArr]=useState(["kiwi","banana"]);

   const handleAddFruit=()=>{
//    arr.push("Mango");
//    console.log("arr",arr);
//    setArr(arr);

    setArr((prev)=>{
        const temp=[...prev]
        temp.push("mango")
        console.log("temp",temp);
        return temp;
    })
    }
    return(
        <div>
            <ul>
                {arr.map((elem)=>{
                    return <li>{elem}</li>
                })}
            </ul>
            <button onClick={handleAddFruit}>Add Mango</button>
        </div>
    )
}
export default App3