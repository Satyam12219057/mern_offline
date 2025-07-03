
import React from 'react'
import {useState} from 'react'

const App1 = () => {
   const [user,setUsers]=useState([]);

   
    console.log(user);
    const handleClick=(e)=>{
        e.preventDefault();//it can stop the page change
        const username=e.target.username.value;
        const city=e.target.city.value;
        
         
        setUsers((prev)=>{
            const temp=[...prev]
            temp.push({username,city})
            return temp;
        })
        
       

    }
    const handleDelete=(idx)=>{
        setUsers((prev)=>{
            const temp=[...prev];
            temp.splice(idx,1);
            return temp;

        })
    }


  return (
    <div>
        <form onSubmit={handleClick}>
        <input type="text"  placeholder="Enter your name " name="username"/>
        <br/>
        <br/>
        <input type="text"  placeholder='Enter your city ' name="city"/>
        <button type="submit">Add data to server</button>
        </form>
        <div>
            {user.map((elem)=>{
                return(
                    
                    <div>
                        <h4>{elem.username}</h4>
                        <p>{elem.city}</p>
                        <button onClick={(idx)=>{
                            console.log(idx);
                            handleDelete(idx);
                        }}>Delete</button>
                    </div>

                )
            })}
        </div>
    </div>

    
    
  )
}

export default App1