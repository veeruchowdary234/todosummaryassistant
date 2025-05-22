import TodoItem from './TodoItem';

const TodoList = ({ todos, refreshTodos }) => {
  if (!Array.isArray(todos)) {
    return <p className="text-center text-red-500">Invalid todo data.</p>;
  }

  if (todos.length === 0) {
    return <p className="text-center text-gray-500 italic">No todos yet.</p>;
  }

  return (
    <div className="mb-6">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          refreshTodos={refreshTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;


