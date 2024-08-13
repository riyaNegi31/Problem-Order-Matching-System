import express from 'express';
import connectDB from './config/connectDB.js';

import errorHandler from './middleware/errorHandler.js';
import appMiddleware from './middleware/app.middleware.js';
import router from './routes/order.routes.js';

const main = async () => {
  const port = 3001;

  try {
    const app = express();
    appMiddleware(app)
   
    app.use('/api',router)

    await connectDB()
    app.use(errorHandler)
    app.listen(port, () => {
      console.log(`listening:*${port}`);
    });

  } catch (e) {}
};

main().catch((e) => console.error(e));