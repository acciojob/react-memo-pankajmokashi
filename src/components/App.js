import React from "react";
import "./../styles/App.css"
import Todo from "./Todo";
import Count from "./Count";
import Memo from "./Memo";

const App = () => {
    return(
        <div>
            <Todo />
            <Count />
            <Memo />
        </div>
    )
}

export default App