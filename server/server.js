import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes.js';
import summarizeRoute from './routes/summarizeRoute.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);
app.use('/api/summarize', summarizeRoute);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(process.env.PORT || 4000, () =>
    console.log(`Server running on port ${process.env.PORT || 4000}`)
  );
}).catch(err => console.error(err));