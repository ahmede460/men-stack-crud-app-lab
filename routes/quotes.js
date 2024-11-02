const express = require("express")
const quoteController = require("../controllers/quotes.js")
const route = express.Router()

route.get("/quotes", quoteController.getQuotes)
route.get("/quotes/new", quoteController.newQuote)
route.post("/quotes", quoteController.newQuote)
route.get("/quotes/:id", quoteController.getQuote)
route.get("/quotes/:id/edit", quoteController.updateQuote)
route.put("/quotes/:id", quoteController.updateQuote)
route.delete("/quotes/:id", quoteController.deleteQuote)

module.exports = route