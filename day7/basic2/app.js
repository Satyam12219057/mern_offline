console.log("hello");
/*
<ul>
<li>iten 1</l1>
<li>iten 2</l1>
</ul>
*/
// const element=getElementById("root")
// const item1=document.createElement("l1")
// item1.innerText="item1"
// const item2=document.createElement("l2")
// item1.innerText="item2"
// const list=document.createElement("ul");
// list.appendChild(item1)
// list.appendChild(item2);
// element.appendChild(list)

//react

// const item1 = React.createElement("li", {}, "item1");
// console.log("item1", item1);
// const item2 = React.createElement("li", {}, "item2");
// const list = React.createElement("ul", {}, "[item1,item2]");

const list = (
  <ul>
    <li>Item 1</li>
    <li>Item 1</li>
  </ul>
);

//virtual dom
const rootElement = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElement);
reactRoot.render(list);
