const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/User");

router.post("/login", async (req,res) => {
    try{

        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).send({msg:"User not found"});
        }
        const matchPassword = await bcrypt.compare(password,user.password)
        if(!matchPassword)return res.status(400).send({msg:"Password not match"});
        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email,
        }, "shhhh", {expiresIn:"1d"});
        return res.status(200).send({data:token, msg:"Login"});
    }catch(error){
        return res.status(400).send({msg:"Internal Server Error"})
    }
});

router.post("/register", async (req,res) =>{
    try{
        const {name, email,password} = req.body;
        
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).send({msg:"Email Id is already taken"})
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = new User({name, email,password:hash} );
       await user.save();
       const token = jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
    }, "shhhh", {expiresIn:"1d"});
    return res.status(200).send({token});
    }catch(error){
        res.status(400).send({msg:"Internal Server Error"});
    }
});


module.exports = router;