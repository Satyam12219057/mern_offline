
const title = document.getElementById("greetings");

const handleUserName = (e) => {
    // console.log("typed");
    // console.log("----");
     console.log(e);
    const elem = e.target;
    console.log(elem.value);
    title.innerText = `Hello ${elem.value}!`;
};

const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(e)
    const username=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value
    if(!email2.endsWith("@lpu.in")){
        alert("please use your LPU email")
    }
    else{

    }
}