import os from 'os';
import process from 'process';
import mongoose from 'mongoose';
import APP_CONSTANTS from '../constants/app.constant.js';

const getNumberConnect = () => {
  return mongoose.connections.length;
};

const checkOverload = () => {
  setInterval(() => {
    const numberConnect = getNumberConnect();
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    console.log('Number of connections:', numberConnect);
    console.log('Number of cores:', numCores);
    console.log('Memory usage:', memoryUsage / 1024 / 1024);
    const check =
      numberConnect / numCores / (memoryUsage / 1024 / 1024) >
      APP_CONSTANTS.MAX_CONNECTIONS_ALLOWED;
    if (check) {
      console.log('Overload detected');
    }
  }, APP_CONSTANTS.TIME_CHECK_OVERLOAD);
};

export default checkOverload;
