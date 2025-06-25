const searchQuarry = window.location.search;
console.log("searchQuarry", searchQuarry);
const res = searchQuarry.split("=");
console.log(res);
const videoId = res[1];

const iframe = document.getElementsByTagName("iframe")[0];
iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
