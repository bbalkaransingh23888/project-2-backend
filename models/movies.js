const mongoose= require('mongoose');
const { builtinModules } = require('module');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema ({
    title: 
    {type: String, required: true},
    director:
    {type: String, required: true},
    actors: 
    {type: [String], required: true},
    releaseYear:
    {type: Number, required: true}
})

module.exports = mongoose.model('movies', MoviesSchema)
