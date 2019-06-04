import React from "react";

function Todo(props) {
  let getStyle = props.item.done ? paraStyleDone : paraStyle;
  const { id, text, done } = props.item;

  return (
    <div style={containerStyle}>
      <input
        style={{ height: "40px", width: "40px" }}
        type="checkbox"
        onChange={props.onChange.bind(this, id)}
        checked={done}
      />
      <p style={getStyle}> {text} </p>
      <button onClick={props.deleteButton.bind(this, id)} style={buttonStyle}>
        x
      </button>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #444",
  padding: "0 20px 0 20px"
};

const paraStyle = {
  width: "100%",
  paddingLeft: "10px",
  fontSize: "1.2em"
};

const paraStyleDone = {
  width: "100%",
  paddingLeft: "10px",
  fontSize: "1.2em",
  color: "grey",
  textDecoration: "line-through"
};

const buttonStyle = {
  color: "darkred",
  background: "transparent",
  border: "none",
  fontWeight: "bold",
  fontSize: "2em",
  fontFamily: "Nunito"
};

export default Todo;
