
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import DB from './config/db'
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
  // data base connection
  // DB()
const CONNECTION_URL ="mongodb+srv://irfani:QncBMpiDMkA5PwKY@cluster0.o8ksy.mongodb.net/newProject?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch(()=>console.log("data base conected"))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);