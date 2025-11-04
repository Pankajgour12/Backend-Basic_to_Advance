import express from 'express';
import { generateToken } from '../utils/token.utils.js';



const router = express.Router();







// Generate- token
// Home route


router.get('/generate-token', (req, res) => {
    // Logic to generate a token (for simplicity, using a static token here)
    const token = generateToken();
    res.status(200).json({

        message: 'Token generated successfully',
        token: token
     });
  });

  router.get('/', (req, res) => {
    res.status(200).send('Welcome to the Home 🏠 Page!');
  }

    ); 



export default router;