import React from "react";
import Todo from "./components/Todo";
import AddTask from "./components/AddTask";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          id: 1,
          text: "Take out the trash",
          done: false
        },
        {
          id: 2,
          text: "Wash the car",
          done: false
        },
        {
          id: 3,
          text: "Clean the house",
          done: true
        }
      ],
      newTask: ""
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleCheck(id) {
    this.setState(prevState => {
      const updatedTodo = prevState.todo.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo.done;
      });
      return updatedTodo;
    });
    console.log("clicked");
  }

  handleDelete(id) {
    this.setState({
      todo: [...this.state.todo.filter(item => item.id !== id)]
    });
  }

  addTask() {
    let newTask = {
      id: Date.now(),
      text: this.state.newTask,
      done: false
    };
    let array = this.state.todo;
    array.push(newTask);
    this.setState({ todo: array });
  }

  updateState(e) {
    this.setState({ newTask: e.target.value });
  }

  render() {
    const todoItems = this.state.todo.map(item => {
      return (
        <Todo
          onChange={this.handleCheck}
          key={item.id}
          item={item}
          deleteButton={this.handleDelete}
        />
      );
    });
    return (
      <div style={appStyle}>
        <h1 style={headerStyle}>Todo List</h1>
        <AddTask updateState={this.updateState} addTask={this.addTask} />
        {todoItems}
      </div>
    );
  }
}

const appStyle = {
  background: "beige",
  border: "2px solid #BBB",
  width: "90vw",
  height: "calc(90vw * 1.6)",
  maxHeight: "90vh",
  margin: "auto",
  marginTop: "3vh",
  borderRadius: "15px"
};

const headerStyle = {
  textAlign: "center",
  fontSize: "4em",
  borderBottom: "1px solid #444",
  margin: "0",
  padding: "20px"
};

export default App;
