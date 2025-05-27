import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    mongoose
      .connect('mongodb://localhost:27018/to-do')
      .then(() => {
        console.log('MongoDB connect successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new Database();
