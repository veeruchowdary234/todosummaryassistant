import { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import SummaryButton from './components/SummaryButton';
import { getTodos, addTodo } from './services/todoService';
import { sendSummary } from './services/summaryService';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const fetchTodos =async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to fetch todos' });
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async (title) => {
    try {
      const newTodo = await addTodo(title);
      setTodos((prev) => [...prev, newTodo]);
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to add todo' });
    }
  };

  const handleSummarize = async () => {
    try {
      const res = await sendSummary();
      setMessage({ type: 'success', text: res.message });
    } catch (err) {
      setMessage({
        type: 'error',
        text: err.response?.data?.error || 'Summary failed',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl px-8 py-10 border border-white/30">
        <div className="flex items-center justify-center gap-3 mb-6">
          <ClipboardDocumentListIcon className="h-8 w-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-center text-indigo-800 tracking-wide">
            Todo Summary Assistant
          </h1>
        </div>

        <TodoInput onAdd={handleAddTodo} />
        <TodoList todos={todos} refreshTodos={fetchTodos} />
        <SummaryButton onClick={handleSummarize} />

        {message && (
          <div
            className={`mt-6 px-4 py-2 text-sm rounded-lg text-center transition-all duration-300 ${
              message.type === 'error'
                ? 'bg-red-100 text-red-700'
                : 'bg-green-100 text-green-700'
            }`}
          >
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
