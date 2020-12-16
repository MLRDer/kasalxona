const mongoose = require("mongoose");
const { Schema } = mongoose;

const bemorSchema = new Schema({
    fish: {
        type: String,
    },
    tel: {
        type: String,
    },
    rasmi: {
        type: String,
    },
    yoshi: {
        type: String,
    },
    doktori: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hodimlar",
    },
    dorilar: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Dorilar",
        },
    ],
    manzili: {
        type: String,
    },
});

module.exports = mongoose.model("Bemorlar", bemorSchema);
