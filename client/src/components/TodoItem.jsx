import { useState } from 'react';
import { updateTodo, deleteTodo } from '../services/todoService';

const TodoItem = ({ todo, refreshTodos }) => {
  const [isediting, setediting] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleSave = async () => {
    if (!newTitle.trim()) return;
    try {
      await updateTodo(todo._id, { title: newTitle.trim() });
      setediting(false);
      refreshTodos();
    } catch (err) {
      console.error('Error updating todo:', err.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id);
      refreshTodos();
    } catch (err) {
      console.error('Error deleting todo:', err.message);
    }
  };

  const handleToggleComplete = async (checked) => {
    try {
      await updateTodo(todo._id, { completed: checked });
      refreshTodos();
    } catch (err) {
      console.error('Error toggling todo:', err.message);
    }
  };

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg mb-2 shadow transition-all ${
        todo.completed ? 'bg-green-50 border border-green-300' : 'bg-white border'
      }`}
    >
      <div className="flex items-center gap-3 flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => handleToggleComplete(e.target.checked)}
          className="accent-indigo-600 scale-125"
        />
        {isEditing ? (
          <input
            type="text"
            className="flex-grow border px-2 py-1 rounded"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') {
                setEditing(false);
                setNewTitle(todo.title);
              }
            }}
          />
        ) : (
          <span
            className={`flex-grow ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>
      <div className="flex gap-2 ml-2">
        {isediting ? (
          <>
            <button
              onClick={handleSave}
              className="text-green-600 hover:underline text-sm"
            >
              Save
            </button>
            <button
              onClick={() => {
                setediting(false);
                setNewTitle(todo.title);
              }}
              className="text-gray-500 hover:underline text-sm"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setediting(true)}
              className="text-blue-600 hover:underline text-sm"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:underline text-sm"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
