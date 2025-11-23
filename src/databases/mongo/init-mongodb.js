import mongoose from 'mongoose';
import MONGO_CONSTANTS from '../../constants/mongo.constant.js';

class InitMongoDB {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(process.env.MONGODB_URI, {
        maxPoolSize: MONGO_CONSTANTS.MAX_POOL_SIZE,
        serverSelectionTimeoutMS: MONGO_CONSTANTS.TIMEOUT,
      })
      .then(() => {
        console.log('Connected to MongoDB successfully');
      })
      .catch((err) => {
        console.log('Error connecting to MongoDB', err);
      });
  }

  static getInstance() {
    if (!InitMongoDB.instance) {
      InitMongoDB.instance = new InitMongoDB();
    }
    return InitMongoDB.instance;
  }
}

export default InitMongoDB;
