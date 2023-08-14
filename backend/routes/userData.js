const express = require("express");
const router = express.Router();
const adminController = require("../controller/admincontroller");
router.get("/:id", adminController.deleteData);

router.get("/", adminController.showUser);



router.post("/add-user", adminController.getUser);

module.exports = router;
