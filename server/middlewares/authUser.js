import jwt from 'jsonwebtoken'
import User from '../models/User.js';

const authUser = async (req, res, next)=>{
    const {token} = req.cookies;

    if(!token){
        return res.status(401).json({success:false, message: 'Not Authorized, no token'});
    }

    try{
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if(tokenDecode.id){
            const user = await User.findById(tokenDecode.id).select("-password");
            if(!user){
                return res.json({success: false, message: 'User not found'});
            }
            req.user = user;
            next();
        }else{
            return res.json({success: false, message: 'Not Authorized'});
        }
    } catch (error){
        return res.json({success: false, message: error.message});
    }
}

export default authUser;
