import React from "react";

function Todo({ text, onSelect, id }) {
  return (
    <>
      <div className="todo_style">
        <i
          onClick={() => {
            onSelect(id);
          }}
          className="fa fa-times"
          aria-hidden="true"
        ></i>
        <li>{text}</li>
      </div>
    </>
  );
}

export default Todo;
