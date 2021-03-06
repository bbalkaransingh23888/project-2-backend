const mongoose = require("mongoose")
const Quotes = require("../models/quotes")
const Movies = require("../models/movies")
const objectify = mongoose.Types.ObjectId

//INDEX - GET all quotes

const indexQuotes = async (req, res) => {
    //get Quotes
    try {
        const allQuotes = await Quotes.find().populate("quoteSourceType");
        res.status(200).json(allQuotes);
    } catch (error) {
        //throw error if something goes wrong
        res.status(400).send(error);
    }
};


const indexMovies = async (req, res) => {
    //get Quotes
    try {
        const allMovies = await Movies.find()
        res.status(200).json(allMovies);
    } catch (error) {
        //throw error if something goes wrong
        res.status(400).send(error);
    }
};

//CREATE - MAKE new quote 

const createQuotes = async (req, res) => {
    //create a new want
    try {
        req.body.quoteSourceType = objectify(req.body.quoteSourceType);
        const newQuotes = await Quotes.create(req.body); 
        const allQuotes = await Quotes.find().populate("quoteSourceType");
        res.send(200).json(allQuotes);
    } catch (error) {
        res.status(400).send(error)
    }
}

//CREATE - MAKE movie object data 

const createMovies = async (req, res) => {
    //create a new want
    try {
        const newMovies = await Movies.create(req.body);
        const allMovies = await Movies.find()
        res.send(200).json(allMovies);
    } catch (error) {
        res.status(400).send(error)
    }
}

//UPDATE - ADDS new info. to quote
const updateQuotes = async (req, res) => {
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

//UPDATE - ADDS new info. to quote
const updateMovies = async (req, res) => {
    //update existing movie by id
    try {
        const updatedMovies = await Movies.findByIdAndUpdate(req.params.id, req.body, {new: true});
        const allMovies = await Movies.find();
        res.status(200).json(allMovies);
    } catch (error) {
        //throw an error if something goes wrong
        res.status(400).send(error);
    }
};

//DESTROY - Destroys/Deletes quotes

const destroyQuotes = async (req, res) => {
    //delete an existing Quotes by ID
    try {
        const deletedQuotes = await Quotes.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedQuotes);
    } catch (error) {
        //throw an error if something goes wrong
        res.status(400).send(error);
    }
}

//DESTROY - Destroys/Deletes movies

const destroyMovies = async (req, res) => {
    //delete an existing Movies by ID
    try {
        const deletedMovies = await Movies.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedMovies);
    } catch (error) {
        //throw an error if something goes wrong
        res.status(400).send(error);
    }
}


module.exports = {indexQuotes, indexMovies, createQuotes, createMovies, updateQuotes, updateMovies, destroyQuotes, destroyMovies};