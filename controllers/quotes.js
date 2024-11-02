const Quote = require("../models/Quote.js")


async function getQuote(request, response){
    const quote = await Quote.findById(request.params.id)
    response.render("quote.ejs", {quote}
    )
}

async function updateQuote(request, response){
    const quote = await Quote.findById(request.params.id)
    if (request.method == "GET"){
        response.render("updatequote.ejs", {quote})
    }

    else if (request.method == "PUT"){
           quote.quote = request.body.quote,
            quote.author = request.body.author
        await quote.save()
        response.redirect("/quotes")
    }
    else {
        return response.redirect("/quotes")
    }
}

async function deleteQuote(request, response){
    if (request.method == "DELETE"){
    const quote = await Quote.findById(request.params.id)
    await Quote.findByIdAndDelete(quote._id)
    return response.redirect("/quotes")}
}

async function getQuotes(request, response){
    const quotes = await Quote.find()
    response.render("index.ejs", {quotes}
    )
}


async function newQuote(request, response){
    if (request.method == "GET"){
        response.render("newquote.ejs")
    }

    else if (request.method == "POST"){
        await Quote.create({
            quote: request.body.quote,
            author: request.body.author
        })
        response.redirect("/quotes/new")
    }
    else {
        response.render("newquote.ejs")
    }
}


module.exports = {getQuote, getQuotes, newQuote, updateQuote, deleteQuote}