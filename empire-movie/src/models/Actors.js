import { Schema, model, models } from "mongoose";

const actorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    birth: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    movies: {
        type: [String],
        default: []
    },
})

const Actor = models.Actor || model("Actor", actorSchema)

export default Actor