
import React from 'react'
import {useState} from 'react'
const FRUITS = [
    {
        name: "Kiwi",
        color: "green",
        price: 600,
    },
    {
        name: "Banana",
        color: "yellow",
        price: 40,
    },
    {
        name: "Apple",
        color: "red",
        price: 200,
    },
    {
        name: "Mango",
        color: "yellow",
        price: 150,
    },
];
 



const App5 = () => {

  //why we have to take two times useState
  const [editIndex,setEditIndex]=useState(-1);
  const [fruits,setfruits]=useState(FRUITS)

const handleSubmit=(e ,idx)=>{
e.preventDefault();
setfruits((prev)=>{//from where we have to get the prev
   const temp = [...prev];
  temp[idx].name=e.target.fruitName.value;
  
  return temp;
});
setEditIndex(-1);


}

  return (
     <div>
            {fruits.map((elem, idx) => {//fruits have stored full FRUITS array
                return (
                    <div>
                        {editIndex !== idx ? (//i cant understand how these conditon will be work
                            <div>
                                <h4>{elem.name}</h4>
                                <h4>{elem.color}</h4>
                                <h4>{elem.price}</h4>
                                <button
                                    onClick={() => {
                                        setEditIndex(idx);
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        ) : (
                            <div>
                                <form
                                    onSubmit={(e) => {//wat is inside the e now and from where it come
                                        handleSubmit(e, idx);
                                    }}
                                    onReset={() => setEditIndex(-1)}
                                >
                                    <input type="text" name="fruitName" />
                                    <button>Update</button>
                                    <button type="reset">Cancel</button>
                                </form>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

    

export default App5