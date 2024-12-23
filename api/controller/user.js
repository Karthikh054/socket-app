const express = require("express");
const router = express.Router();
const User = require("../model/User");
router.post("/", async (req,res) =>{
    try{
        const {name, email,password} = req.body;
        const user = new User({name, email,password} );
       await user.save();
    }catch(error){
        console.log(error);
    }
});


module.exports = router;