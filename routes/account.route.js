const router = require("express").Router();
const accountController = require("../controllers/account.controller");
router.get("/", accountController.test);
router.post("/create", accountController.create_account);
router.get("/searchByEmail", accountController.search_by_email);
module.exports = router;
