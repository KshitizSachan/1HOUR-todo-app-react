import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      status: 0,
      title: "Item 1",
    },
    {
      id: 1,
      status: 0,
      title: "Item 2",
    },
    {
      id: 2,
      status: 0,
      title: "Item 3",
    },
  ]);
  const [item, setItem] = useState(""); // Initialize item as an empty string

  const inputHandler = (event) => {
    setItem(event.target.value);
  };

  const changeStatus = (status, id) => {
    let updatedItem = todos.filter((item) => item.id === id)[0];
    updatedItem.status = updatedItem.status ? 0 : 1;
    let newTodos = todos.filter((item) => item.id !== id);
    newTodos = [...newTodos, updatedItem];
    setTodos(newTodos);
  };

  const addTodo = () => {
    // finding a unique id
    let uId = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === uId) uId++;
    }
    const newItem = {
      id: uId,
      status: 0,
      title: item,
    };

    console.log(newItem);

    setTodos([...todos, newItem]);
    setItem(""); // Clear the input field after adding a todo
  };

  const deleteOneItem = (id) =>{
      const updatedItems= todos.filter((item) => item.id != id) 
      setTodos(updatedItems)
  }

  const deleteTodo = () =>{
    setTodos()
  }



  const strike = {
    textDecoration: "line-through",
    display: "inline-block",
    margin: "5px",
  };

  return (
    <div className="App">
      <input
        placeholder="Write todo"
        value={item}
        onInput={inputHandler}
      ></input>
      <button onClick={addTodo}>Add item</button>
      <button onClick={deleteTodo}>Delete all items</button>

      {todos && (
        <div>
          {todos.map((todoItem, id) => (
            <div key={id}>
              <div
                style={
                  todoItem.status
                    ? strike
                    : { display: "inline-block", margin: "5px" }
                }
              >
                {id + 1}. {todoItem.title}
              </div>
              {todoItem.status ? (
                <button
                  onClick={() => {
                    changeStatus(todoItem.status, todoItem.id);
                  }}
                >
                  Done
                </button>
              ) : (
                <button
                  onClick={() => {
                    changeStatus(todoItem.status, todoItem.id);
                  }}
                >
                  Pending
                </button>
              )}
              <button onClick={() =>{
                deleteOneItem(todoItem.id);
              }}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
