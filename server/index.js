import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

console.log(process.env.SECRET_KEY);
console.log('Hello world')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
