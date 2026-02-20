import express from "express";

const router = express.Router()


router.post('/',addTask)
router.get('/',getTask)




export default router;