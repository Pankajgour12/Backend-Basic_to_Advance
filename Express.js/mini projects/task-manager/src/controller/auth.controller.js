
export const Login = (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  // ✅ Correct property: req.session, not res.session
  req.session.user = { username };

  // ✅ Set cookie
  res.cookie('username', username, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 12 // 12 hours
  });

  return res.json({ message: `Login Successful ${username}` });
};



export const Logout = (req, res)=>{
    res.clearCookie('username');
    res.session.destroy((err)=>{
        if(err){
            return res.status(500).json({message:'Logout Failed'});
        }
        res.json({message:'Logout Successful'});
    });
}