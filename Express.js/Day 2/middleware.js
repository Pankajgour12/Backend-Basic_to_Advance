import express from 'express';
const app = express();
const PORT = 3000;


// globalMiddleware
function SayHiMiddleware(req, res, next) {
    console.log('Hi from Global Middleware');
    next();
}


app.use(SayHiMiddleware);



app.get('/', (req, res) => {
  res.send('Hello, Express.js World!');
 
});


app.get('/about',SayHiMiddleware, (req, res) => { // route-specific middleware
  res.send('About Page');
});


    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });






    // Middleware 

    // 1. Global Middleware
    // 2. Route-specific Middleware
    // 3. Error-handling Middleware
