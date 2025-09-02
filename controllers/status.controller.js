const Status=require("../models/status")

const addStatus=async(req,res)=>{
    try {
        const {name,description}=req.body
        const newStatus=await Status.create({
            name,
            description
        })
        res.status(201).send({
            message:"new Status added",
            data:newStatus
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const getAllStatus= async (req,res)=>{
    try {
        const status=await Status.findAll()
        res.status(200).send(status)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const getOneStatus=async (req,res)=>{
    try {
        const {id}=req.params
        const status=await Status.findByPk(id)
        if(!status){
            return res.status(404).send({message:"Status not found"})
        }
        res.status(200).send(status)    
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}
const updateStatus= async (req,res)=>{
    try {
        const {id}=req.params
        const status=await Status.update(req.body,{
            where:{id},
            returning:true
        })
        res.status(200).send({
            message:"Status uptated",
            status
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const deleteStatus= async (req,res)=>{
    try {
        const {id}=req.params
        const status=await Status.destroy({
            where:{id},
            returning:true
        })
        res.status(200).send({
            message:"Status deleted",
            status
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    addStatus,
    getAllStatus,
    getOneStatus,
    updateStatus,
    deleteStatus
}