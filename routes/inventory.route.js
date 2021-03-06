const router = require("express").Router();
const inventoryController = require("../controllers/inventory.controller");
router.post("/create", inventoryController.product_create);
router.get("/searchById", inventoryController.product_search);
router.get("/all", inventoryController.all_products);
module.exports = router;
