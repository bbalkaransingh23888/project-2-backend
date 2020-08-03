const express = require("express");
const QuotesRouter = express.Router();
const { index, create, update, destroy } = require("../controllers/quotes.js")

// routes and middleware specific to this router

QuotesRouter.get("/", index);

QuotesRouter.post("/", create);

QuotesRouter.put("/:id", update);

QuotesRouter.delete("/:id", destroy);

module.exports = QuotesRouter;