import { Router } from 'express';
import TodoController from '../api/controllers/todoController';

const router = Router();

router.get('/todos', TodoController.getAllTodos);
router.post('/todos', TodoController.createTodo);
router.put('/todos/:id', TodoController.updateTodo);
router.delete('/todos/:id', TodoController.deleteTodo);

export default router;
