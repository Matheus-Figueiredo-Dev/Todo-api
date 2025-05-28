import { Router } from 'express';
import TodoController from '../api/controllers/todoController';

const router = Router();

router.get('/todos', TodoController.getAllTodos);
router.post('/todos', TodoController.createTodos);

export default router;
