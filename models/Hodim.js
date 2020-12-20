const mongoose = require("mongoose");
const { Schema } = mongoose;

const hodimSchema = new Schema({
    fish: {
        type: String,
    },
    tel: {
        type: String,
    },
    lavozimi: {
        type: String,
    },
    rasmi: {
        type: String,
    },
    manzili: {
        type: String,
    },
    maoshi: {
        type: Number,
    },
    bemorlari: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bemorlar",
        },
    ],
    ish_vaqti: {
        type: String,
    },
});

module.exports = mongoose.model("Hodimlar", hodimSchema);
