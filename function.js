
// 
//function in javascript
/*
console.log("start")
function calculateJuiceBill(juceprice){     //this is parameter
let juice=50
let gstOnJuice=0.1
let juiceBillAmount=juice+juice*gstOnJuice;
console.log(juiceBillAmount)
}
console.log("MID")
let Price=30;
calculateJuiceBill(Price);
calculateJuiceBill(Price);
console.log("end")

*/
//this function will take two parameter
/*
let price=10
let gst=0.1
function calculateBillAmount(price,gst){
    let billAmount=price+price*gst
    console.log(billAmount)
}*/

//arrow function
const printBill=(txt)=>{
    console.log("_____________")
    console.log("this is our final bill", txt)

};
//printBill(100)
const printBillForFoodAndCloth=(txt)=>{
    console.log("_____________")
    console.log("this is our final bill", txt)

};

const printBillForClothAndDrink=(txt)=>{
    console.log("_____________")
    console.log("this is our final bill", txt)

};


const calculateBillAmountForFood=(price)=>{
return price+price*0.5;
};

//cloths
const calculateBillAmountForCloths=(price)=>{
return price+price*0.5;
};
//drinks
const calculateBillAmountForDrinks=(price)=>{
return price+price*0.5;
};

//Higher order function
//the function which accept another function as a parameter or return a function


const generateBill=(food,cloths,drink,cb)=>{
 const foodAmount=calculateBillAmountForFood(food);
 const clothAmount=calculateBillAmountForCloths(cloth);
 const drinkAmount=calculateBillAmountForDrinks(drink);

 const finalBill=foodAmount+clothAmount+drinkAmount;
 printBill(finalAmount);
 
 
 const foodAndCloth=foodAmount+clothAmount;
 printBillForFoodAndCloth(foodAndCloth)
 
 const clothAndDrink=clothAmount+drinkAmount;
 printBillForClothAndDrink(clothAndDrink)

}


generateBill(100,150,200,printBillForFoodAndCloth)


//steps to commit the change



