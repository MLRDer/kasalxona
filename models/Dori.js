const mongoose = require("mongoose");
const { Schema } = mongoose;

const doriSchema = new Schema({
    nomi: {
        type: String,
        required: true,
    },
    yetkazib_beruvchi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "YetkazibBeruvchilar",
    },
    tarif: {
        type: String,
    },
    rasmi: {
        type: String,
    },
    narxi: {
        type: Number,
        required: true,
    },
    miqdori: {
        type: Number,
    },
});

module.exports = mongoose.model("Dorilar", doriSchema);
