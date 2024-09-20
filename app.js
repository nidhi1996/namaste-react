const heading1 = React.createElement("h2",{id:"heading"},"Hello World from React");
    const root1 = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading1); //object
    root1.render(heading1);


    const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div", {id: "child"}, 
    [React.createElement("h2", {}, "I am h2 tag"),React.createElement("h3", {}, "I am h3 tag")]), React.createElement("div", {id: "child2"}, 
    [React.createElement("h4", {}, "I am h4 tag"),React.createElement("h5", {}, "I am h5 tag")])
]);
    root1.render(parent);