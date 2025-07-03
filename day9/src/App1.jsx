
import React from 'react'
import {useState} from "react"



const App=()=>{
    const [monitor,remote]=useState(()=>{
        const val=localStorage.getItem("counter-value");
        if(val){
            return parseInt(val);
        }
        else{
            return 0;
        }
    });
    console.log(monitor);
    //we cannot directly pass value in the form of
    // const handleClick=()=>{
    //     remote(monitor+1)
    //     remote(monitor+1)
    //     console.log(monitor);
    // }
      

    // const handleClick=()=>{
        
    //     remote((prev)=>{
    //         const newValue=prev+1;
    //         localStorage.setItem("counter-value",newValue);
    //         return newValue;
    //     });
    //      remote((prev)=>{
    //         return prev+1;
    //     });

  //  }
  const handeDecrement=()=>{
    remote((prev)=>{
        if(prev==0){
             const newValue=0;
        localStorage.setItem("counter-value",newValue);
            return newValue;
        }
        else{
             const newValue=prev-1;
        localStorage.setItem("counter-value",newValue);
            return newValue;

        }
       
    });
  }


   const handleClick=()=>{
        
        remote((prev)=>{
            const newValue=prev+1;
            localStorage.setItem("counter-value",newValue);
            return newValue;
        });
         remote((prev)=>{
            return prev+1;
        });

   }
   const handeReset=()=>{
    remote(0);
    localStorage.setItem("counter-value",0);
   }




    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={handeDecrement}>Decerement</button>
             <button onClick={handeReset}>Reset</button>

            <h2> {monitor}</h2>
            
        </div>
    )
}
export default App;