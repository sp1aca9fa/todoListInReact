const App = () => {
  const [todos, setTodos] = React.useState(
    [
      { id: crypto.randomUUID(), title: "Code a to-do list", done: false },
      { id: crypto.randomUUID(), title: "Eat breakfast", done: true },
      { id: crypto.randomUUID(), title: "Do some exercise", done: false },
      { id: crypto.randomUUID(), title: "Water the plants", done: true }
    ]
  );

  const [title, setTitle] = React.useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const addTodo = () => {
    // console.log("Adding a todo...");
    // console.log(title);
    if (title === "" || title === null) return;
    const newTodo = { id: crypto.randomUUID(), title, done: false };
    setTitle("");
    setTodos([...todos, newTodo]);

    // TODO: add a new to-do based on the title to the `todos` array
    // setTitle('');
  };

  const removeTodo = (idToDelete) => {
    // console.log(idToDelete);
    const filteredTodos = todos.filter((todo) => {
      // console.log(todo.id);
      return todo.id !== idToDelete;
    });

    setTodos(filteredTodos);
  };

  const toggleTodo = (idToToggle) => {
    // console.log(idToToggle);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === idToToggle) todo.done = !todo.done;
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-lg-4 bg-white rounded shadow-sm p-5">
        <h1 className="mb-3">🗒 My Todo List in React</h1>
        <form className="d-flex mb-3">
          <input type="text" className="form-control" id="newtodo" placeholder="Add a new to do" value={title} onChange={handleTitleChange}></input>
          <button type="button" className="btn btn-primary" onClick={addTodo}>Add</button>
        </form>
        <div id="todosContainer">
          {todos.map(todo => (
            <div className="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
              <input className="form-check-input me-1" type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)}></input>
              <div className="d-flex flex-fill" key={todo.id}>{todo.title}<a href="" className="ms-auto btn-close" aria-label="Delete" onClick={() => removeTodo(todo.id)}></a></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
