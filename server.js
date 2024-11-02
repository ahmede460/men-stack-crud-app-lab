const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const quoteRoute = require("./routes/quotes")
const methodOverride = require( "method-override")
dotenv.config()

const PORT = process.env.PORT

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

const app = express();

app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: false }));
app.use(quoteRoute)


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
