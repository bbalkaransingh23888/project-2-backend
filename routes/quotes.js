const express = require("express");
const QuotesRouter = express.Router();
//const MoviesRouter = express.Router();
const { indexQuotes, indexMovies, createQuotes, createMovies, update, destroyQuotes, destroyMovies } = require("../controllers/quotes.js")

// routes and middleware specific to this router

QuotesRouter.get("/", indexQuotes);

QuotesRouter.get("/movies", indexMovies)

QuotesRouter.post("/quotes", createQuotes);

QuotesRouter.post("/movies", createMovies);

QuotesRouter.put("/:id", update);

QuotesRouter.delete("/quotes/:id", destroyQuotes);

QuotesRouter.delete("/movies/:id", destroyMovies);

module.exports = QuotesRouter;