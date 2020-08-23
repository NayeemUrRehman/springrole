const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AccountSchema = new Schema({
  email: { type: String,trim:true, required: true, max: 100 },
  name: {
    firstName: { type: String, required: true, max: 100 },
    lastName: { type: String, required: true, max: 100 },
  },
  address: {
    city: { type: String, required: true, max: 100 },
    state: { type: String, required: true, max: 100 },
    pincode: { type: String, required: true, max: 10 },
  },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

// Export the model
module.exports = mongoose.model("Account", AccountSchema);
