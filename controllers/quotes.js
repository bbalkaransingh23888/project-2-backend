const Quotes = require("../models/quotes")
const Movies = require("../models/movies")

//INDEX - GET all quotes

const index = async (req, res) => {
    //get Quotes
    try {
        const allQuotes = await Quotes.find();
        res.status(200).json(allQuotes);
    } catch (error) {
        //throw error if something goes wrong
        res.status(400).send(error);
    }
};

//CREATE - MAKE new quote 

const create = async (req, res) => {
    //create a new want
    try {
        const newQuotes = await Quotes.create(req.body);
        const allQuotes = await Quotes.find();
        res.send(200).json(allQuotes);
    } catch (error) {
        res.status(400).send(error)
    }
}

//UPDATE - ADDS new info. to quote
const update = async (req, res) => {
    //update existing quote by id
    try {
        const updatedQuotes = await Quotes.findByIdAndUpdate(req.params.id, req.body, {new: true});
        const allQuotes = await Quotes.find();
        res.status(200).json(allQuotes);
    } catch (error) {
        //throw an error if something goes wrong
        res.status(400).send(error);
    }
};

//DESTROY - Destroys/Deletes quotes

const destroy = async (req, res) => {
    //delete an existing Quotes by ID
    try {
        const deletedQuotes = await Quotes.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedQuotes);
    } catch (error) {
        //throw an error if something goes wrong
        res.status(400).send(error);
    }
}


module.exports = {index, create, update, destroy};