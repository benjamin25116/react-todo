import React from "react";

function AddTask(props) {

  return (
    <div style={containerStyle}>
      <input
        onChange={props.updateState}
        style={inputStyle}
        type="text"
        placeholder="Add new task"
      />
      <button onClick={props.addTask} style={buttonStyle}>
        +
      </button>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  borderBottom: "1px solid #444",
  height: "4em",
  alignItems: "center"
};

const inputStyle = {
  width: "80%",
  background: "transparent",
  border: "none",
  paddingLeft: "25px",
  fontSize: "1.3em",
  fontFamily: "Quicksand"
};

const buttonStyle = {
  width: "20%",
  height: "100%",
  color: "darkgreen",
  fontSize: "2.5em",
  lineHeight: "0"
};

export default AddTask;
