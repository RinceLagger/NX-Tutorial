import React, {useEffect, useState} from 'react'
import {Todo} from '@myorg/data';
import {Todos} from '@myorg/ui';


export function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {title: 'Todo 1'},
    {title: 'Todo 2'}
  ])

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
    <h1>Todos</h1>
    <Todos todos={todos}/>
    <button id={'add-todo'} onClick={addTodo}>Add Todo</button>
    </>
  )
 
}

export default App;
