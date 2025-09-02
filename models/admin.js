const { password } = require("pg/lib/defaults")
const sequalize=require("../config/db")
const {DataTypes}=require("sequelize")

const Admin=sequalize.define("admin",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    full_name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    user_name:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    password:{
        type:DataTypes.STRING(20),
        allowNull:true
    },
    phone_number:{
        type:DataTypes.STRING(15),
        unique:true,
        validate:{
            is:/^\d{2}-\d{3}-\d{2}-\d{2}/
        }
    },
    email:{
        type:DataTypes.STRING(30)
    },
    tg_link:{
        type:DataTypes.STRING(20)
    },
    token:{
        type:DataTypes.STRING(20)
    },
    is_creator:{
        type:DataTypes.BOOLEAN
    },
    is_active:{
        type:DataTypes.BOOLEAN
    },
    description:{
      type:DataTypes.TEXT  
    }
},
{    freezeTableName: true,
    timestamps:false
}
)

module.exports=Admin