import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';


const router = express.Router();

//  /dashboard ( access only for have token )



router.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).send('Welcome to the Dashboard 📊 Page!')
   
});

export default router;
