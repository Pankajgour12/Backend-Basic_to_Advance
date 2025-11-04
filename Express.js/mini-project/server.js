import express from 'express';
import publicRoutes from './src/routes/public.routes.js';
import privateRoutes from './src/routes/private.routes.js';


import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';
import LogMiddleware from './src/middleware/log.middleware.js';



const app = express();
const PORT = 3000;



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(path.join(__dirname, 'logs'))) {
    fs.mkdirSync(path.join(__dirname, 'logs'));
}




//* InBuilt Middleware
app.use(express.json());


//! Global Custom Middleware 


app.use(LogMiddleware)







//? Route Middleware
app.use('/public', publicRoutes);
app.use('/private', privateRoutes);



app.get('/', (req, res) => {
  res.send('Hello, Express.js World !');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});