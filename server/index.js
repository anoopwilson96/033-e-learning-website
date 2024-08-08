import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import apiRouter from './routes/index.js';
import { databaseMDB } from './config/mDB.js';
dotenv.config();

const app = express();
const port = process.env.PORT;


//Router redirected to index.js(server)>index.js(router)>index.js(v1)
// localhost3000:api/v1/(needed routes) this is how url will be.
app.use('/api',apiRouter )



databaseMDB(); // Call the function to establish connection
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
