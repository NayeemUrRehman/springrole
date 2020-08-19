module.exports = {
    test : async(req,res)=>{
        return res.status(200).send({
            "message":"Test order is ok"
        })
    }
}