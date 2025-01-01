const Message = require("../model/Message");
const saveMsg = async (data) =>{
    try{
        const saveMsg = new Message(data);
        await saveMsg.save();
        return saveMsg;
    }catch(error){
        res.status(400).send({msg:"Internal Server Error"});
    }

};

module.exports = {
    saveMsg,
}