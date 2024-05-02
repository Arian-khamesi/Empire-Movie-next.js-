import { Schema, model, models } from "mongoose";

const serieSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    seasen: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
})

const Serie = models.Serie || model("Serie", serieSchema)

export default Serie