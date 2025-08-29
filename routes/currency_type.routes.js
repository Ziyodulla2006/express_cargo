const {
  addCurrency,
  getAllCurrency,
  getOneCurrency,
  updateCurrency,
  deleteCurrency,
} = require("../controllers/currency_type.controller");

const router = require("express").Router();

router.post("/", addCurrency);
router.get("/",getAllCurrency)
router.get("/:id",getOneCurrency)
router.patch("/:id",updateCurrency)
router.delete("/:id",deleteCurrency)

module.exports = router;
