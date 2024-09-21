export const Todo = ({ todo, handleTodoEdit, editTodoDone, handleTodoDelete }) => {
  return (
    <div className="flex items-center">
      <input
        checked={todo.done}
        type="checkbox"
        onChange={(e) => editTodoDone(todo, e.target.checked)} 
      />
      <span className="flex-grow">{todo.task}</span>
      <button onClick={() => handleTodoEdit(todo)}>Edit</button>
      <button
        onClick={() => handleTodoDelete(todo.id)} 
        className="color-danger"
      >
        Delete
      </button>
    </div>
  );
};
