const Account = require("../models/accounts.schema");
module.exports = {
  test: async (req, res) => {
    return res.status(200).send({
      message: "Test account is ok",
    });
  },
  create_account: async (req, res, next) => {
    const { email, name, address } = req.body;
    let account = new Account({
      email: email,
      name: {
        firstName: name.firstName || "nayeem",
        lastName: name.lastName || "ur rehman",
      },
      address: {
        city: address.city,
        state: address.state,
        pincode: address.pincode,
      },
    });

    account.save(function (err) {
      if (err) {
        return next(err);
      }
      res.send("Account Created successfully");
    });
  },
  search_by_email: async (req, res, next) => {
    const { email } = req.query;
    Account.find({ email: email })
      .populate("orders")
      .exec((err, account) => {
        if (err) next(err);
        res.send(account);
      });
  },
};
