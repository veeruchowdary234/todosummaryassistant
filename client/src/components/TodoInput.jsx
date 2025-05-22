import { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [title, settitle] = useState('');

  const handleSubmit = async () => {
    if (!title.trim()) return;
    try {
      await onAdd(title.trim()); 
      settitle('');
    } catch (err) {
      console.error('Error adding todo:', err.message);
    }
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button
        onClick={handleSubmit}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
