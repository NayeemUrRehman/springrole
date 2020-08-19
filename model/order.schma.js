
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://nayeem:example123@cluster0.9nfon.mongodb.net/ecommerce?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("ecommerce").collection("order");
  // perform actions on the collection object
  client.close();
});
