const Order = require('../models/order.schema')
module.exports = {
    test : async(req,res)=>{
        return res.status(200).send({
            "message":"Test order is ok"
        })
    },
    order_create: function (req, res, next) {
        let order = new Order({
          status : false,
          products : ['5f40f8366043a332bbfff8b3'],
          account:'5f422e2f6e59a83177b9b56b'
        });
    
        order.save(function (err) {
          if (err) {
            return next(err);
          }
          res.send("Order Created successfully");
        });
      },
}