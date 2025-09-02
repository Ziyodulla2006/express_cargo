const clientRouter = require("../routes/client.routes")
const currencyRouter=require("../routes/currency_type.routes")
const statusRouter=require("../routes/status.routes")
const adminRouter=require("../routes/admin.routes")

const router=require("express").Router()

router.use("/client",clientRouter)
router.use("/currency",currencyRouter)
router.use("/status",statusRouter)
router.use("/admin",adminRouter)

module.exports=router