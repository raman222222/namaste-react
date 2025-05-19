

const parent = React.createElement("div", {id: "parent"}, 

[
    React.createElement("div", {id:"child"},
        [
            React.createElement("h1", {}, "Hello"),
            React.createElement("h2", {}, "Hello Dude"),
        ]
    ),

    React.createElement("div", {id:"child2"},
        [
            React.createElement("h1", {}, "Hello 2"),
            React.createElement("h2", {}, "Hello Dude 2"),
        ]
    ),


]

);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);