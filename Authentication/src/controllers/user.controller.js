import { loginUser, logoutUser, registerUser } from "../services/user.service.js";


// signUp 
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


// Login
export const login  = async(req,res)=>{
    const {username, password} = req.body;
    try {

        const user = await loginUser(username,password);
        if(!user){
            return res.status(401).json({
                success:false,
                message:"Invalid Credentials"
            })
        }
        req.session.user = user;
        res.status(200).json({
            success:true,
            message:"Login Successful",
            user:user
        })


        

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error Login",
            error:error.message
        })
        
    }
   

}





// Logout

export const logout = async (req, res) => {

    try {

        await logoutUser(req);

        res.clearCookie("connect.sid"); // session cookie delete

        res.status(200).json({
            success:true,
            message:"Logout Successful"
        });

    } catch (error) {

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};