import { Schema, model, models } from "mongoose";

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
})

const Movie = models.Movie || model("Movie", movieSchema)

export default Movie