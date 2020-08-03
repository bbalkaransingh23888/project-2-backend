const mongoose= require('mongoose');
const { builtinModules } = require('module');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema ({
    title: 
    {type: String},
    director:
    {type: String},
    actors: 
    {type: [String]},
    releaseYear:
    {type: Number}
})

module.exports = mongoose.model('movies', MoviesSchema)
