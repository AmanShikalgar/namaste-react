/**
 * 
 * <div id="parent">
 *     <div id="chlid">
 *      <h1></h1>
 *      <h2></h2>
 *     </div>
 * </div> 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

const parent=React.createElement(
    "div",
     {id:"parent"},
     React.createElement("div",{id:"child"},[
      React.createElement ("h1" ,{},"i am h1 tag"),
      React.createElement ("h2" ,{},"i am h2tag")
      ]),
      React.createElement("div",{id:"child2"},[
        React.createElement ("h1" ,{},"i am h1 tag"),
        React.createElement ("h2" ,{},"i am h2tag")
        ]),
);







//const heading=React.createElement("h1", {id:"heading",xyz:"abc"} ,"hello world from React!");

console.log(parent); //object
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //get object and convert to an h1 tag
