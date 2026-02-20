import { Task } from "../models/task.model.js";


export  const createTask = async(userId , DataTransferItemList, description)=>{
    const task =  new Task({userId, title, description});
    return await task.save();

}