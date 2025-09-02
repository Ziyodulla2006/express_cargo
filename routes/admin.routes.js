const {
  addAdmin,
  getAllAdmin,
  getOneAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/admin.controller");

const router=require("express").Router()

router.post("/",addAdmin)
router.get("/",getAllAdmin)
router.get("/:id",getOneAdmin)
router.patch("/:id",updateAdmin)
router.delete("/:id",deleteAdmin)

module.exports=router