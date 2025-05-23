import express from 'express';
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
} from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
