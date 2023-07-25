import React from "react";
import "./../styles/App.css"
import Todo from "./Todo";
import Count from "./Count";
import Memo from "./Memo";

const App = () => {
    return(
        <div className="main">
            <h1>React.useMemo</h1>
            <Todo />
            <Count />
            <Memo />
        </div>
    )
}

export default App