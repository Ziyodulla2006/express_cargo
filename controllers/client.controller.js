const Client=require("../models/client")

const addClient= async (req,res)=>{
    try {
      const {full_name,phone_number,email,address,location}=req.body  
      const candidate=await Client.findOne({where:{email}})
      if(candidate){
        return res.status(403).send({message:"Bunday mijoz mavjud"})
      }
      const newClient=await Client.create({
        full_name,
        phone_number,
        email,
        address,
        location
      })
      res.status(201).send({
        message:"New Client added",
        client: newClient, 

      })
    } catch (error) {
        console.log(error)
        res.status(500).send({error:"Cilent qoshishda xatolik"})
    }
}

const getClients = async (req, res) => {
        try {
          const clients = await Client.findAll();
          res.status(200).send(clients);
        } catch (error) {
          console.error(error);
          res.status(500).send({ error: "Clientlarni olishda xatolik" });
        }
 };

 const getOneClient = async (req, res) => {
    try {
      const { id } = req.params;
      const client = await Client.findByPk(id);
      if (!client) {
        return res.status(404).send({ message: "Client topilmadi" });
      }
      res.status(200).send(client);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Clientni olishda xatolik" });
    }
  };

  const updateClient=async (req,res)=>{
    try {
        const {id}=req.params
        const client=await Client.update(req.body,{
            where:{id},
            returning:true,
        })

        res.status(200).send({
            message: "Client updated",
            client,
          });
    } catch (error) {
        console.log(error)

    }
  }

  const deleteClient = async (req, res) => {
    try {
      const {id}=req.params
      const client=await Client.destroy(req.body,{
          where:{id},
          returning:true,
      })

      res.status(200).send({
          message: "Client deleted",
          client,
        });
  } catch (error) {
      console.log(error)
  }
};


module.exports={
    addClient,
    getClients,
    getOneClient,
    updateClient,
    deleteClient
}