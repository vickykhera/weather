// App.js
import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import Footer from './components/Footer';

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== '') setListTodo([...listTodo, { text: inputText, isCompleted: false }]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  };

  const markAsDone = (index) => {
    const newListTodo = listTodo.map((item, i) =>
      i === index ? { ...item, isCompleted: true } : item
    );
    setListTodo(newListTodo);
  };

  return (
    <div className='main-container'>
      
      <div className='center-container'>
        <TodoInput addList={addList} />
        <h1 className='app-heading'>Todo List</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
              markAsDone={markAsDone} // Pass the new function
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
