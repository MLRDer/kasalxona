const mongoose = require("mongoose");
const { Schema } = mongoose;

const yetkazibBeruvchiSchema = new Schema({
    nomi: {
        type: String,
    },
    rasmi: {
        type: String,
    },
    dori_turi: {
        type: String,
    },
});

module.exports = mongoose.model("YetkazibBeruvchilar", yetkazibBeruvchiSchema);
