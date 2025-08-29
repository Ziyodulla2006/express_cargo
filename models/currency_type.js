const sequalize=require("../config/db")
const {DataTypes}=require("sequelize")

const Currency=sequalize.define("currency",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT
    }
})

module.exports=Currency