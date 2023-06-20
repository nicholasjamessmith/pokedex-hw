//Dependencies
require("dotenv").config() //reaad the .env file process.env (process.eng.PORT)
const express = require("express")
const morgan = require("morgan") // logger
const PokemonRouter = require("./controllers/pokemon") //import the router
const methodOverride = require("method-override")

//Create Application Object
const app = express() // create our application object

//Global Variables
const PORT = process.env.PORT || 3777

//Middleware
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use("/static", express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use("/pokemon", PokemonRouter)


//Routes
app.get("/", (req, res) => {
  res.send("Server is Working")
})

//Create Server Listener
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})