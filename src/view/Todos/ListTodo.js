import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      {
        id: "todo1",
        title: "Doing homework",
      },
      {
        id: "todo2",
        title: "Watch video",
      },
      {
        id: "todo3",
        title: "Read book",
      },
    ],
    editTodo: {},
  };
  addTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Wow add so easy!");
  };
  handleOnCLickDelete = (todo) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id != todo.id);
    this.setState({
      listTodos: currentTodo,
    });

    toast.success("Delete sucess!");

    // console.log("check todo: ", todo)
  };
  handleEditTodo = (todo) => {
    let { listTodos, editTodo } = this.state;
    let idEmpty = Object.keys(editTodo).length === 0;
    // save
    if (idEmpty === false && editTodo.id === todo.id) {
      let listTodocopy = [...listTodos];
      let objectIndex = listTodocopy.findIndex((item) => item.id == todo.id);
      listTodocopy[objectIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodocopy,
        editTodo: {},
      });
      toast.success("Edit sucess!");
      return;
    }
    this.setState({
      editTodo: todo,
    });
    // console.log("check editTodo: ", editTodo);
  };
  handleEditChange = (event) => {
    let editchange = { ...this.state.editTodo };
    editchange.title = event.target.value;
    this.setState({
      editTodo: editchange,
    });
  };
  render() {
    const history = window.location;
        console.log("chekc props: ",history)
    let { listTodos, editTodo } = this.state;
    let idEmpty = Object.keys(editTodo).length === 0;
    console.log("check empty : ", idEmpty);
    return (
      <>
        <p>Simple Todo App </p>
        <div className="list-todo-container">
          <AddTodo addnewtodo={this.addTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {idEmpty == true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) => this.handleEditChange(event)}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}

                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {idEmpty == false && editTodo.id == item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleOnCLickDelete(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default ListTodo;
