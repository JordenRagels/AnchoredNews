const mongoose = require("mongoose");

let Schema = mongoose.Schema;
let headlineSchema = new Schema({
    headline: {
        type: String,
        required: true,
        unique: {
            index: {
                unique: true,
            }
        }
    },
    summary: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    date: {
        type: date,
        default: Date.now,
    },
    saved: {
        type: Boolean,
        default: false,
    }
})

const Headline = mongoose.model("Headline", headlineSchema);
module.exports = Headline;