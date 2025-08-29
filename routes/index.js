const clientRouter = require("../routes/client.routes")
const currencyRouter=require("../routes/currency_type.routes")


const router=require("express").Router()

router.use("/client",clientRouter)
router.use("/currency",currencyRouter)

module.exports=router