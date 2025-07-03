




// const a=20;
// const b=30;
// console.log('a+b',a+b);



//this is for the captlized text
const getCapitalizedText = (txt) => {
    const words = txt.split(" ");
    const resArr = words.map((elem) => {
        const firstChar = elem[0]; //g
        const remainingWord = elem.slice(1); //ood
        return `${firstChar.toUpperCase()}${remainingWord}`; // `Good`
    });
    return resArr.join(" ");
};
const res = getCapitalizedText("I am a good student!"); // --> I Am A Good Student

console.log(res);


//this is for the camel case 
const getCamelCaseText = (txt) => {
    const words = txt.split(" ");
    const resArr = words.map((elem, idx) => {
        if (idx !== 0) {
            const firstChar = elem[0].toUpperCase(); //g
            const remainingWord = elem.slice(1).toLowerCase(); //OOD
            return `${firstChar}${remainingWord}`; // `Good`
        } else {
            return elem.toLowerCase();
        }
    });
    return resArr.join("");
};


//we have to export

module.exports={
    getCapitalizedText:getCapitalizedText,
    getCamelCaseText:getCamelCaseText,


}






