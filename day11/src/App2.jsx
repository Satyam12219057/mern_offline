
import React from 'react'
import {useState,useEffect} from 'react'
//state change re-renderning happen
const App2 = () => {
    const [usersList, SetUserList]=useState([])
    console.log("userList",usersList);
     const getData=async()=>{
        console.log("iside getData" );
        const response=await(fetch("https://dummyjson.com/users"))
        const data=await(response.json())
        console.log( "data   >",data)
        const{users}=data;

       // SetUserList(user.firstName)
        SetUserList(users)



      
    }
    console.log("---before getDta call---");
    console.log("getDta called");
    useEffect(()=>{
        getData();
    },[])//theis is called after return
    //empty dependency array
    //->call back function called 

    if(usersList.length>0){
        usersList.map((ele)=>{
      console.log(ele.firstName);
        })
    }
  
  return (
    <div >

       <h1>hello</h1>
       {usersList.map(()=>{
        return(
            <div key={Element.id}>
            <h1>{Element.firstName}</h1>
            </div>
        )
       })}
    </div>
  )
}

export default App2