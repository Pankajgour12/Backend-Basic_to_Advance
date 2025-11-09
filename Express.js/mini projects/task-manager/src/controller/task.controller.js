import {readTask , writeTask} from "../utils/file.utils.js"



export const getAllTask = async(req , res )=>{

    if(!req.session.user){
        return res.status(401).json({message:'Unauthenicated'})
    }

    const task = await readTask();

    res.json(task.filter((task)=>task.username === req.session.user.username))


}

export const createTask = async(req , res )=>{
    const {title, description} = req.body;
    const tasks = await readTask();

    const newTask = {
        id:tasks.length + 1,
        title,
        description,
        username:req.session.user.username,
        completed:false
    }
    tasks.push(newTask);
    await writeTask(tasks);
    res.status(201).json({message:'Task Created Successfully', task:newTask})








}


export const updateTask = ()=>{}

export const deleteTask = ()=>{}
