
// const arr1=["tata","mahindra","suzuki","hyundai"]
// const arr2=["honda","hero","tvs","bmw"]
// console.log(arr1)

// //read
// console.log(arr1[1])

// const [a,b,c]=arr1;
// console.log(b,c)

// const [x,y,z]=arr2;
// console.log(x,z);

// //array methords
// const arr=["tata","mahindra","suzuki","hyundai"]

// //push in a array
// arr.push("bmw")

// //pop in a array
// arr.pop()

// //shift  remove element from start
// arr.shift();

// //unshift to add elemnt at the start of the array
// console.log(arr)

// //use of the splice function in js


// arr.splice(1,2,"tata","new","john deer");
// console.log(arr)



//find the element of the array whose length equal to suzuki
// const arr=["tata","mahindra","suzuki","hyundai"]
// console.log(arr.indexOf("suzuki"));
// console.log(arr.indexOf("honda"))


//object inside array
// const arr1=[{name:"satyam",city:"patna"},
//     {name:"aman",city:"lakhisarai"},
//     {name:"aman1",city:"delhi"}
// ]

// console.log({name:"sataym",city:"lakhisarai"})
// console.log({name:"satyam",city:"lakhisarai"})//it wil give false beacuse i



//--------------------------
// const arr=["ab","cd","xy","de","ef"]

// if(arr.indexOf(ab)){//it will give false beacuse this function give the index and ab at0 index so it return false
//     console.log("present")
// }
// else{
//     console.log(false);
// }


// //so we use include function
// //it can give answer in true and false
// if(arr.include("ab")){

//     console.log("present")
// }else{
//     console.log(false)
// }



//how to use find function in javascript
// const myFunc=(a,b,c,d)=>{
//     console.log("a,b,c,d",a,b,c,d)
//     if(a=="mn") return true
//     else return false
// }
// const arr=["ab","cd","xy","de","ef"]

// const ele=(arr.find(myFunc));
// console.log("value of ele",ele)


// const arr1=[{name:"satyam",city:"patna"},
//     {name:"aman",city:"lakhisarai"},
//     {name:"aman1",city:"delhi"}
// ]

// const myFunc=(a,b)=>{
//     if(a.name=="aman") return true;
//     return false;
// }
// const ans=arr1.find(myFunc);
// console.log(ans)





//traversing methords
const arr1=[{name:"satyam",city:"patna",score:33},
    {name:"aman",city:"lakhisarai",score:22},
    {name:"aman1",city:"delhi",score:40}
];
const myFunc=(elem)=>{
    if(elem.score<25){
        return {...elem,remark:"fail"};
    }
    else{
        return {...elem,remarks:"pass"};
    }
};
const resArr=arr1.map(myFunc);
console.log("resArr=",resArr);
