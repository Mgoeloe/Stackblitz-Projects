import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./style.css";


const AddTodoList = (props) => {
  const [ todo, setTodo ] = useState('');

  const handleChange = (event) => {
    setTodo(event.target.value);
  }
  
  const handleSubmit = (event) => {
    if(todo !== '') {
      props.handleSubmit(todo);
      setTodo('');
    }
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
        placeholder='Add new Todo!'
        onChange={handleChange}
        value={todo} />
      <button type='submit'>Add</button>
    </form>
  );
}

const TodoList = (props) => {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index} >{val}</li>
  );
  return <ul>{listItems}</ul>;
}

const ListManager = (props) => {
  const [todos, setTodos] = useState(props.data);

  const AddTodo = (iets) => {
    setTodos([...todos, iets]);
  }

  return (
    <div>
      <AddTodoList handleSubmit={AddTodo} />
      <TodoList data={todos} />
    </div>
  );

}

const todos = ['Eten', 'Drinken', 'slapen'];

ReactDOM.render(
  <ListManager data={todos} />, 
  document.getElementById('root')
);


