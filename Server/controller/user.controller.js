import user from "../model/user.model.js";
import bcrypt from "bcryptjs"

export const signup= async (req,res)=>{
    try {
        const {name,email,pass}=req.body;
        const User=await user.findOne({emailid: email})
        if(User)
        {
           return res.status(400).json({message:"User already exists"});
        }
        
        const hashpass= await bcrypt.hash(pass,10)
        const createdUser=new user({
            fullname:name,
            emailid:email,
            password:hashpass
        })
        await createdUser.save()
        // await user.create({
        //     fullname:name,
        //     emailid:email,
        //     password:hashpass
        // })
        res.status(201).json({message:"User created successfully",User:{
            id:createdUser._id,
            name:createdUser.fullname,
            email:createdUser.emailid,
        },
    });
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json({message:"Internal server error"})
    }
}
export const login= async (req,res)=>{
    try {
        const {email,pass}=req.body;
        const User=await user.findOne({emailid: email})
        if(!User)
        {
            return res.status(400).json({message:"Invalid Username or password"})
        }
        else
        {
            const ismatch= await bcrypt.compare(pass,User.password)
            if(ismatch)
            {
                res.status(200).json({message:"Login Successful",User:{
                    id:User._id,
                    name:User.fullname,
                    email:User.emailid,
                },
            });
            }
            else
            {
                return res.status(400).json({message:"Invalid Username or password"})
            } 
        }
    } catch (error) {
        console.log("Error: "+error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}