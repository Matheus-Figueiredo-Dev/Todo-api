import type { Request, Response } from 'express';
import Todo from '../models/todo';
class TodoController {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async getAllTodos(req: Request, res: Response): Promise<any> {
    try {
      const todos = await Todo.find();
      return res.status(200).json(todos);
    } catch (error) {
      console.log(error);
      return res.status(500).send('Server error!');
    }
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async createTodo(req: Request, res: Response): Promise<any> {
    try {
      const { task } = req.body;
      if (!task) {
        return res
          .status(400)
          .send('Task is empty. Please fill all the fields!');
      }
      const todo = new Todo({
        task,
      });

      await todo.save();

      return res.status(200).json(todo);
    } catch (error) {
      console.log(error);
      return res.status(500).send('Server error!');
    }
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async updateTodo(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const { finished } = req.body;

      await Todo.findByIdAndUpdate(id, {
        finished,
      });

      const todo = await Todo.findById(id);
      return res.status(200).json(todo);
    } catch (error) {
      console.log(error);
      return res.status(500).send('Server error!');
    }
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async deleteTodo(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      await Todo.findByIdAndDelete(id);

      return res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send('Server error!');
    }
  }
}

export default new TodoController();
