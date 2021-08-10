const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema({
    name: String,
    direction: String,
    city: String,
});

const warehouse = mongoose.model("warehouse", warehouseSchema);
module.exports = warehouse;