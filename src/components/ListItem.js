export default function ListItem({todos, setTodos}) {

    const onRemoveTask=(itemId)=> {
        setTodos([...todos].filter((todo) => todo.id !== itemId),
        );
    }

    const list = todos.map((todo) => (
        <li key={todo.id}>
            {todo.title}
            <button onClick={() => onRemoveTask(todo.id)}>
                Remove
            </button>
        </li>
    ));

    return (
      <div>
          <ol>{list}</ol>
      </div>
    );
  }