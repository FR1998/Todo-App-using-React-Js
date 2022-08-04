import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Table() {
  const [todo, setTodo] = useState(""); //For adding single Todo
  const [todos, setTodos] = useState([]); //For all Todo
  const [editId, setEditId] = useState(0); //Edit Todo
  const [query,setQuery]= useState(""); // Search
  const navigate = useNavigate();



  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      console.log(result.data);
      setTodos(result.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

     // Editing a Todo in same form

     if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, title:todo })
          : { id: t.id, title: t.title }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return ;
      
    }
    
    
    /////// Adding new TODO

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, title: todo }, ...todos]);
      setTodo("");
    }
  };




  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);

  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  const Logout = () => {
    localStorage.removeItem('token');
    navigate("/");
  };

  

 

  return (
    <div className="container">
     <button className='btn btn-warning' onClick={Logout}>Logout</button><br/><br/>
      <input 
        type="text"
        placeholder="Search..."
        className='Search'
        onChange={(e) => setQuery(e.target.value)}
        />

        <br/>


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        /> <br/>
        <button className="btn btn-info" type="submit"> {editId?"Edit":"Add Todo"} </button>
      </form>


      <ul className="list-group">
        {todos.filter(todo=>todo.title.includes(query)).map((todo) => (
          <li
            key={todo.id}
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {todo.todo}
            {todo.title}
            <div className="row">
            <button
              onClick={()=>handleEdit(todo.id)}
              type="button"
              class="btn btn-info"
            >
              Edit
            </button>
            <button  onClick={()=>handleDelete(todo.id)} type="button" class="btn btn-danger">
              Delete
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
