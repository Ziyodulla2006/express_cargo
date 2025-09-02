const {
  addStatus,
  getAllStatus,
  getOneStatus,
  updateStatus,
  deleteStatus,
} = require("../controllers/status.controller");

const router = require("express").Router();

router.post("/", addStatus);
router.get("/",getAllStatus)
router.get("/:id",getOneStatus)
router.patch("/:id",updateStatus)
router.delete("/:id",deleteStatus)

module.exports = router;
