const Warehouse = require("../models/warehouse");

const registerWarehouse = async(req, res) =>{
    if(!req.body.name || !req.body.direction || !req.body.city)
    return res.status(401).send("Process failed: Incomplete data");

    const existingWarehouse = await Warehouse.findOne({name: req.body.name});
    if(existingWarehouse) return res.status(401).send("Procees failed: warehouse already exist");

    const warehouse = new Warehouse({
        name:req.body.name,
        direction: req.body.direction,
        city: req.body.city,
    });

    const result = await warehouse.save();
    if(!result) return res.status(401).send("Failed to register warehouse")
    return res.status(200).send({warehouse});
};
const listWarehouse= async(req, res)=>{
        const warehouse = await Warehouse.find()
        if(!warehouse) return res.status(401).send("no warehouse")
        return res.status(200).send({warehouse})
};


module.exports = {registerWarehouse,listWarehouse};