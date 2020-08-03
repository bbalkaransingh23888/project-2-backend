// import connection
const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const quotesSchema = new Schema ({
    quote: 
    {type: String, required: true},
    whoSaid:
    {type: String, required: true},
    quoteUse: 
    {type: String, required: false},
    quoteSourceType: 
    {type: String, required: true}
})

//export Quotes model/Schema
const Quotes = model("quotes", quotesSchema)
module.exports = Quotes