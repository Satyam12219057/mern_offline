
//how  dom will perform on the given page
// const headingElement=document.getElementById("heading")

// //this way we have to modify the elemnt getting by id
// headingElement.innerHTML="<h1>this my new js code</h1>" //i can give the  text with the elemnt

// console.log(headingElement)

// headingElement.innerText="<h2>this my new js code</h2>"
// console.log(headingElement)



//now i am going to manipulate using thr id
// const headingElement=document.getElementById("res")
// //and i want to push someting inside the heading tag
// headingElement.innerHTML="<h2>this is the code to push in the div tag</h2>"
// console.log(headingElement)

//--------------------------get element by tag-----------
// const headingElement=document.getElementsByTagName("p");
// console.log(headingElement.innerHTML) //it can print the values inside the tag
// console.log(headingElement)


//-------------using get element by class NAME------

// const headingElement=document.getElementsByClassName("para");
// console.log(headingElement.innerHTML) //it can print the values inside the tag
// console.log(headingElement[0].innerHTML)
// console.log(headingElement)

//---------query selector in dom--------------
// let heading1Element=document.querySelector("h1")//directly select element by id
// console.log(heading1Element)

// let headingElement=document.querySelector("#heading")//select element by id
// console.log(headingElement)

// //using queryselecterALL

// let allHeading=document.querySelectorAll("h3")
// console.log(allHeading)

// //we have alloud to use the loop
// allHeading.forEach((item,index)=>{
//     console.log(item.innerHTML)
// })

// console.log(allHeading)


//
const users = [
  { id: 1, name: "Satyam", age: 20 },

  { id: 2, name: "Ravi",   age: 22 },
  { id: 3, name: "Anita",  age: 19 }
];
for(let i=0;i<users.length;i++){
    const {age}=users[i]
    console.log(age);
}

for(i in users){
    const {age}=users[i]
    console.log(age)
}
for(let i of users){
    const {age}=i
    console.log(age)
}
users.forEach((user,index)=>{
    console.log(user,index)
})

//i want only age of the student
users.forEach((user)=>{
    const {age}=user
    console.log(age)
})

//i want only the name of the user
users.forEach((user)=>{
    const {name}=user
    console.log(name)
})
users.forEach((data,index)=>{
    console.log(index,data)
})


//map
/*
const arr=[5,1,3,2,6]
function double(x){
    return x*2;
}
//this way we have to conver the number to bianry
function binary(x){
    return x.toString(2);
}
const output=arr.map(binary)
console.log(output)
console.log(arr)
*/


//filter in javscript
// const arr=[5,1,3,2,6]

// function myfunc(x) {
//     return x>4
// }

// //filter odd value

// const output=arr.filter(myfunc);
// console.log(output)


const students = [
  { id: 1, name: "Satyam", age: 20, marks: 85 },
  { id: 2, name: "Ravi", age: 21, marks: 78 },
  { id: 3, name: "Aman", age: 19, marks: 92 },
  { id: 4, name: "Neha", age: 22, marks: 88 },
  { id: 5, name: "Tanya", age: 20, marks: 67 },
  { id: 6, name: "Karan", age: 23, marks: 71 },
  { id: 7, name: "Divya", age: 21, marks: 90 },
  { id: 8, name: "Rohit", age: 24, marks: 56 },
  { id: 9, name: "Sneha", age: 22, marks: 89 },
  { id: 10, name: "Ankit", age: 20, marks: 75 },
  { id: 11, name: "Priya", age: 23, marks: 94 },
  { id: 12, name: "Vikas", age: 22, marks: 81 },
  { id: 13, name: "Simran", age: 20, marks: 65 },
  { id: 14, name: "Mohan", age: 21, marks: 74 },
  { id: 15, name: "Jyoti", age: 20, marks: 88 },
  { id: 16, name: "Rahul", age: 25, marks: 69 },
  { id: 17, name: "Komal", age: 19, marks: 91 },
  { id: 18, name: "Nikhil", age: 24, marks: 62 },
  { id: 19, name: "Meena", age: 23, marks: 77 },
  { id: 20, name: "Arjun", age: 22, marks: 84 },
  { id: 21, name: "Payal", age: 20, marks: 73 },
  { id: 22, name: "Manoj", age: 21, marks: 66 },
  { id: 23, name: "Alok", age: 24, marks: 58 },
  { id: 24, name: "Rina", age: 22, marks: 86 },
  { id: 25, name: "Deepak", age: 20, marks: 80 },
  { id: 26, name: "Sunita", age: 23, marks: 70 },
  { id: 27, name: "Yash", age: 21, marks: 92 },
  { id: 28, name: "Bhavna", age: 19, marks: 64 },
  { id: 29, name: "Pooja", age: 22, marks: 79 },
  { id: 30, name: "Ramesh", age: 20, marks: 55 },
  { id: 31, name: "Geeta", age: 23, marks: 90 },
  { id: 32, name: "Abhishek", age: 21, marks: 83 },
  { id: 33, name: "Kriti", age: 22, marks: 72 },
  { id: 34, name: "Dinesh", age: 24, marks: 60 },
  { id: 35, name: "Anjali", age: 20, marks: 93 },
  { id: 36, name: "Shyam", age: 25, marks: 68 },
  { id: 37, name: "Palak", age: 21, marks: 87 },
  { id: 38, name: "Vinay", age: 19, marks: 76 },
  { id: 39, name: "Kirti", age: 23, marks: 61 },
  { id: 40, name: "Harshit", age: 20, marks: 89 },
  { id: 41, name: "Tushar", age: 22, marks: 74 },
  { id: 42, name: "Snehal", age: 24, marks: 59 },
  { id: 43, name: "Ajay", age: 20, marks: 82 },
  { id: 44, name: "Neelam", age: 21, marks: 66 },
  { id: 45, name: "Ishita", age: 22, marks: 95 },
  { id: 46, name: "Suraj", age: 20, marks: 69 },
  { id: 47, name: "Chirag", age: 23, marks: 78 },
  { id: 48, name: "Lavanya", age: 19, marks: 85 },
  { id: 49, name: "Kabir", age: 21, marks: 63 },
  { id: 50, name: "Muskan", age: 20, marks: 91 }
];

//list of full name of al the user
// function myfunc(obj){
//   const {name}=obj
//   return name
// }
//  const output=students.map(myfunc);
//  console.log(output)

// const output=students.map((obj)=>{
//      const {name}=obj
//    return name
// });
//   console.log(output)

//    const output1=students.forEach((obj)=>{
//      const {name}=obj
//    return name
//   })
//   console.log(output)

//it can give the array whose id less than 20
//   const output2=students.filter((obj)=>{
//     const {id}=obj
//     return id<20
//   })
//   console.log(output2)


// const output2=students.map((obj)=>{
//     const {id}=obj
//     if(id<20){
//         return id
//     }
//     else{
//         return 0;
//     }
//   })
//   console.log(output2)


const university = {
  name: "Lovely Professional University",
  location: {
    city: "Phagwara",
    state: "Punjab",
    country: "India",
    pinCode: 144411
  },
  established: 2005,
  departments: [
    {
      name: "Computer Science",
      head: "Dr. R.K. Sharma",
      courses: [
        { code: "CSE101", title: "Data Structures", credits: 4 },
        { code: "CSE102", title: "Operating Systems", credits: 3 },
        { code: "CSE103", title: "Cloud Computing", credits: 3 }
      ],
      students: [
        { id: 1, name: "Satyam Kumar", age: 20, marks: 88 },
        { id: 2, name: "Aman Raj", age: 21, marks: 76 }
      ]
    },
    {
      name: "Electronics",
      head: "Dr. Neetu Yadav",
      courses: [
        { code: "ECE101", title: "Digital Circuits", credits: 3 },
        { code: "ECE102", title: "Signal Processing", credits: 4 }
      ],
      students: [
        { id: 3, name: "Rohit Singh", age: 22, marks: 84 },
        { id: 4, name: "Tanya Verma", age: 21, marks: 79 }
      ]
    }
  ],
  hostel: {
    totalCapacity: 5000,
    boysHostel: {
      name: "Aryabhatt Bhawan",
      capacity: 3000,
      warden: "Mr. Ravi Sharma"
    },
    girlsHostel: {
      name: "Kalpana Chawla Bhawan",
      capacity: 2000,
      warden: "Mrs. Kavita Singh"
    }
  },
  placements: {
    companiesVisited: 150,
    highestPackage: "45 LPA",
    averagePackage: "6.5 LPA",
    topRecruiters: ["Google", "Microsoft", "Amazon", "TCS", "Infosys"]
  },
  website: "https://www.lpu.in"
};

const {departments}=university
departments.forEach((dept)=>{
    const {students}=dept
    students.forEach((student)=>{
        console.log("student",student.marks)
    })

})

//i want to rename the student to university student
university.departments.forEach((dept) => {
  const { students: universityStudent } = dept; // rename while destructuring
  console.log("universityStudent:", universityStudent);
});



