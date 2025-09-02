const Admin=require("../models/admin")

const addAdmin=async (req,res)=>{
    try {
        const {full_name,user_name,password,phone_number,email}=req.body
        const candidate=await Admin.findOne({where:{email}})
        if(candidate){
            return res.status(403).send({message:"Bunday admin yoq"})
        }
        const result=await Admin.create({
            full_name,
            user_name,
            password,
            phone_number,
            email
        })

        res.status(201).send({
            message:"new Admin Added",
            data:result
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const getAllAdmin=async (req,res)=>{
    try {
        const admin= await Admin.findAll()
        res.status(200).send(admin)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const getOneAdmin=async (req,res)=>{
    try {
        const {id}=req.params
        const admin=await Admin.findByPk(id)
        if(!admin){
            res.status(404).send({message:"Admin not found"})
        }
        res.status(200).send(admin)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})        
    }
}

const updateAdmin= async (req,res)=>{
    try {
        const {id}=req.params
        const admin= await Admin.update(req.body,{
            where:{id},
            returning:true
        })
        res.status(200).send({
            message:"Admin uptated",
            admin
        })
    } catch ({error}) {
        console.log(error)
    }
}

const deleteAdmin=async (req,res)=>{
    try {
        const {id}=req.params
        const admin=await Admin.destroy({
            where:{id},
            returning:true
        })
        res.status(200).send({
            message:"Admin deleted",
            admin
        })
    } catch (error) {
        console.log(error)

    }
}

module.exports={
    addAdmin,
    getAllAdmin,
    getOneAdmin,
    updateAdmin,
    deleteAdmin
}