const Product = require("../models/inventory.schema");

module.exports = {

  product_create: function (req, res, next) {
    const { name, price, quantity } = req.body;
    let product = new Product({
      name: name || "Chocolate",
      price: price || "25",
      quantity: quantity || "80",
    });

    product.save(function (err) {
      if (err) {
        return next(err);
      }
      res.send("Product Created successfully");
    });
  },
  product_search: function (req, res, next) {
    Product.findById("5f40f8366043a332bbfff8b3", function (err, product) {
      if (err) throw err;

      res.send(product);
    });
  },
  all_products: function (req, res, next) {
    Product.find({}, function (err, product) {
      if (err) throw err;

      res.send(product);
    });
  },
};
