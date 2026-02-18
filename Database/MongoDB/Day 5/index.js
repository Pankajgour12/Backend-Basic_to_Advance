import express from 'express';
import connectDB from './config/db.js';
import userRoute from './routes/user.routes.js'; 

const PORT = 3000;
const app = express();
app.use(express.json());

//routes

app.use('/api',userRoute)





app.get('/', (req, res) => {
  res.send('Hello World!');
});


// connect to DB
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


