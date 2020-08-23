const Order = require("../models/order.schema");
const Account = require("../models/accounts.schema");
module.exports = {
  test: async (req, res) => {
    return res.status(200).send({
      message: "Test order is ok",
    });
  },
  order_create: function (req, res, next) {
    const { email, products } = req.body;
    Account.find({ email: email }, function (err, account) {
      if (err) throw err;

      let order = new Order({
        account: account[0]._id,
        status: false,
        products: products,
      });

      order.save(function (err, order) {
        if (err) {
          return next(err);
        }
        Account.findOneAndUpdate(
          { email: email },
          { $push: { orders: order._id } },
          { new: true, useFindAndModify: false },
          function (err, account) {
            res.send("Order placed successfully for " + account.email);
          }
        );
      });
    });
  },
  search_by_email: async (req, res, next) => {
    const { email } = req.query;
    Order.findOne({ status: false })
      .populate("products account")
      .exec((err, account) => {
        if (err) next(err);
        res.send(account);
      });
  },
};
