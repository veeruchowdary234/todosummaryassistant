import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

export const addTodo = async (req, res) => {
  const { title } = req.body;
  const todo = new Todo({ title});
  await todo.save();
  res.status(201).json(todo);
};

export const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
};

export const updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
};
