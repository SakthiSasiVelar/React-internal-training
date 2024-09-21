import { ApiState } from './ApiState';
import { Todo } from './Todo';
import { useCreateTodos, useEditTodos , useDeleteTodo} from '../api/react-query';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const _TodoApp = ({ todos }) => {
  const [task, setTask] = useState('');
  const [editTodo, setEditTodo] = useState(null);

  const { mutate: createMutate, isPending: createPending } = useCreateTodos();
  const { mutate: editMutate, isPending: editPending } = useEditTodos();
  const { mutate: deleteMutate, isPending: deletePending } = useDeleteTodo();

  const handleAddTodo = () => {
    if (editTodo) {
      editMutate({...editTodo ,task}); 
      setEditTodo(null);
    } else {
      createMutate({ task, id: uuid(), done: false });
    }
    setTask('');
  };

  const handleTodoEdit = (todo) => {
    setTask(todo.task);
    setEditTodo(todo);
  };

  const editTodoDone = (todo, done) => {
    editMutate({...todo , done:done}); 
  };

  const handleTodoDelete = (todoId) => {
    deleteMutate(todoId); 
  };

  return (
    <div className="flex flex-column gap-1">
      <div className="flex gap-1">
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button
          disabled={createPending || editPending}
          onClick={handleAddTodo}
        >
          {createPending || editPending ? 'loading...' : editTodo ? 'Update Todo' : 'Add Todo'}
        </button>
      </div>
      {(todos ?? []).map((todo , index) => (
        <Todo
          key={index}
          todo={todo}
          handleTodoEdit={handleTodoEdit}
          editTodoDone={editTodoDone}
          handleTodoDelete={handleTodoDelete}
        />
      ))}
    </div>
  );
};

export const TodoApp = ApiState(_TodoApp);

