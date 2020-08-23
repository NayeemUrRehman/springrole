const router = require("express").Router();
const orderController = require("../controllers/order.controller");
router.get("/", orderController.test);
router.post("/create", orderController.order_create);
router.get("/search", orderController.search_by_email);
module.exports = router;
