import { createTask } from "../services/task.service";


export const addTask = async(req,res)=>{
    const {title,description} = req.body;
    try {
        const task = await createTask(req.session.userId,title,description);
        res.status(201).json({
            success:true,
            message:"Task Created Successfully",
            task:task


        })
        

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }

}



export const getTask = async()=>{}
