import React, { useState, useEffect } from 'react';
import TodoAdd from '../components/TodoAdd';
import TodoList from '../components/TodoList';
import { v4 as uuidv4 } from 'uuid';


const Index = () => {
  const LOCAL_STORAGE_KEY = 'list-todos';
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({id: '', name: '', desc: '', });

  const addTodoHandler = (todo) => {
    const newTodo = [{ id: uuidv4(), name: todo.name, desc: todo.desc }];
    setTodos([...todos, ...newTodo]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...todos, ...newTodo])
    );
  };

  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
  };

  const updateTodoHandler = (id) => {
    const updateTodo = todos.find((todo) => {
      return todo.id === id;
    });

    setTodo({
      id,
      name: updateTodo.name,
      desc: updateTodo.desc,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.name || !todo.desc) {
      alert('Please fill all field');
      return;
    } else if (!todo.id) {
      addTodoHandler(todo);
    } else {
      const editTodo = todos.map((list) => {
        if (list.id === todo.id) {
          return {
            ...list,
            name: todo.name,
            desc: todo.desc,
          };
        } else {
          return list;
        }
      });
      setTodos(editTodo);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(editTodo));
    }

    setTodo({
      id: '',
      name: '',
      desc: '',
    });
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    list && setTodos(list);
  }, [setTodos]);

  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
      <div class="container">
      <a class="navbar-brand " href="/">
      Todo List App React JS
    </a>
  </div>
</nav>
      <TodoAdd
       todo={todo} todos={todos} setTodo={setTodo} addHandler={addTodoHandler} handleSubmit={handleSubmit}
      />
      <TodoList
        todos={todos} deleteHandler={deleteTodoHandler} updateHandler={updateTodoHandler}
      />
    </div>
  );
};

export default Index;