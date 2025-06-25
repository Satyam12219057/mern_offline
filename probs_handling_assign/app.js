
const domRoot=document.getElementById("root")
const reactRoot=ReactDOM.createRoot(domRoot)

const arr=[{
    name:"Prabjyot",
    score:29
},
{
    name:"Rakesh",
    score:29
},
{
    name:"sohan",
    score:29
},
{
    name:"shayam",
    score:29
},
{
    name:"anuj",
    score:29
},

]

const styleObj={
    colo:"purple",
    fontSize:'30 px',
    


}
const Card=(props)=>{

    const {name,score}=props;
    return(
        <div className="card"> 
         <h1>{name}</h1>
         <h1>{score}</h1>
        </div>
    )
}
const App=()=>{

    return (
      <div className="parent">
        {
            arr.map((e,idx)=>{
                return(
                    <div>
                        <h2>{e.name}</h2>
                        <h2>{e.score}</h2>
                    </div>
                )
            })
        }
      </div>
    )
}
//this is also doing the same thing like the first case and function call

// const App1=()=>{
//     return(
//         <div>
//             <h1>Hello</h1>
//             {arr.map((elem)=>{
//                 return <Card title={elem.name} score={elem.score}/>
//             })}
//         </div>
//     )
// }

reactRoot.render(App());

//forEach never returs 
//so in the case of the forEach we have to use map