import express from "express";
import { addTask, getTask } from "../controllers/task.controller.js";
import { validateSession } from "../middlewares/session.middleware.js";

const router = express.Router()


router.post('/',validateSession,addTask)
router.get('/',validateSession,getTask)




export default router;