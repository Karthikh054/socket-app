const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
    try{

    }catch(error){
        return res.status(400).send({msg:"Internal Server Error"})
    }
});

module.exports = router;