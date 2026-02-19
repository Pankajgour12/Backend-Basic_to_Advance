import { registerUser } from "../services/user.service.js";



export const signup = async(req,res)=>{
const {username,password} = req.body;
try {
    const user = await registerUser(username,password)
    res.status(200).json({
        success:true,
        message:"User Registered Successfully",
        user:user
    })
} catch (error) {
    res.status(500).json({
        success:false,
        message:error.message
    })
    
}

}



export const login  = async()=>{}
export const logout = async()=>{}