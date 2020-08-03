const mongoose= require('mongoose');
//const { builtinModules } = require('module');
const {Schema, model} = mongoose;

const MoviesSchema = new Schema ({
    title: 
    {type: String, required: true},
    director:
    {type: String, required: true},
    actors: 
    {type: [String], required: true},
    whoSaid: 
    {type: Schema.Types.ObjectId, required: true, ref: "quotes"},
    releaseYear:
    {type: Number, required: true}
})

module.exports = model('movies', MoviesSchema)
