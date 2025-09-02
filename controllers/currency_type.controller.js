const Currency=require("../models/currency_type")

const addCurrency= async(req,res)=>{
    try {
        const {name,description}=req.body
        const newCurrency=await Currency.create({
            name,
            description
        })

        res.status(201).send({
            message:"new Currency type added",
            data:newCurrency
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const getAllCurrency=async (req,res)=>{
    try {
        const currency= await Currency.findAll()
        res.status(200).send(currency)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const getOneCurrency= async (req,res)=>{
    try {
        const {id}=req.params
        const currency=await Currency.findByPk(id)
        if(!currency){
            return res.status(404).send({message:"Currency not foiund"})
        }
        res.status(200).send(currency)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const updateCurrency=async (req,res)=>{
    try {
        const {id}=req.params
        const currency=await Currency.update(req.body,{
            where:{id},
            returning:true
        })

        res.status(200).send({
            message:"Currency uptated",
            currency,
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteCurrency=async (req,res)=>{
    try {
        const {id}=req.params
        const currency=await Currency.destroy({
            where:{id},
            returning:true
        })
        res.status(200).send({
            message:"Currency deleted",
            currency
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    addCurrency,
    getAllCurrency,
    getOneCurrency,
    updateCurrency,
    deleteCurrency
}