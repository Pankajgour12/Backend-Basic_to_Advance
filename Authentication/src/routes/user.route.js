import express from "express";


const router = express.Router()


//Routes

router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)

export default router;