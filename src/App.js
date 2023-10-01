import React, { useState } from "react";

import "./App.css";
import Todo from "./Components/Todo";

function App() {
  const [inputList, setinputList] = useState("");
  const [items, setItems] = useState([]);

  const Additem = (e) => {
    setinputList(e.target.value);
  };

  const Add = () => {
    if (inputList.trim() !== "") {
      setItems((olditems) => {
        return [...olditems, inputList];
      });
      setinputList("");
    }
  };

  const deleteitem = (id) => {
    console.log("delete");
    setItems((olditems) => {
      return olditems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
    <h1>Todo App by React</h1>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={inputList}
            placeholder="Add Items"
            onChange={Additem}
          />
          <button onClick={Add}>+</button>
          <ol>
            {items.map((itemvalue, index) => {
              return (
               <Todo
               text={itemvalue}
               key={index}
               id={index}
               onSelect={deleteitem}
               />
              );
            })}
          </ol>
        </div>
      </div>
      
    </>
  );
}

export default App;
