
console.log("-----loading of the app.js firl----");
const helper=require("./text-formeter.js");
const helper1=require("./paragraph-formeter.js");
//const textConverter=require("./app.js")

const resp=helper.getCapitalizedText("i am satyam kumar");
const resp2=helper1.formatParagraph("this is a m")



console.log(resp);
console.log(resp2);