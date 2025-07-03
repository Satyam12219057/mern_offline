
import React from 'react'

const APP = () => {
    const [fruit,setFruits]=useState([
        {
            name:"kiwi",
            color:"green",
            price:600,
        },
        {
            name:"apple",
            color:"yellow",
            price:100,

        },
        {
            name:"apple",
            color:"yellow",
            price:100,

        },

            {
            name:"apple",
            color:"yellow",
            price:100,
            }
    ]);
    
  return (
    <div>
        {fruit.map((elem,idx)=>{
            return(
                <div key={idx}>
                    <h3>{elem.name}</h3>
                    <h3>{elem.color}</h3>
                    <h3>{elem.price}</h3>
                    <button onClick={()=>{
                        setEditIndex(idx);
                    }}>EDIT</button>
                    </div>
            )
        })

        }



    </div>
  )
}

export default APP