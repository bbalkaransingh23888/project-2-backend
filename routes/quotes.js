const express = require("express");
const QuotesRouter = express.Router();
//const MoviesRouter = express.Router();
const { indexQuotes, indexMovies, createQuotes, createMovies, updateQuotes, updateMovies, destroyQuotes, destroyMovies } = require("../controllers/quotes.js")

// routes and middleware specific to this router

QuotesRouter.get("/quotes", indexQuotes);

QuotesRouter.get("/movies", indexMovies)

QuotesRouter.post("/quotes", createQuotes);

QuotesRouter.post("/movies", createMovies);

QuotesRouter.put("/quotes/:id", updateQuotes);

QuotesRouter.put("/movies/:id", updateMovies)

QuotesRouter.delete("/quotes/:id", destroyQuotes);

QuotesRouter.delete("/movies/:id", destroyMovies);

module.exports = QuotesRouter;