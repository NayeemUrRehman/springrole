const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
  account: { type: Schema.Types.ObjectId, ref: "Account" },
  status: { type: String, default: false },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  date: { type: Date, default: Date.now },
});

// Export the model
module.exports = mongoose.model("Order", OrderSchema);
