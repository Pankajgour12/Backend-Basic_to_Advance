import express from 'express';
const app = express();
const PORT = 3000;








app.get('/', (req, res) => {
  res.send('Hello, Express.js World!');
 
});


app.get('/about',(req, res) => { // route-specific middleware
  res.send('About Page');
});


    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });




