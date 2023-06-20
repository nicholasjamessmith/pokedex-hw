//Dependencies
const express = require("express")
const Pokemon = require("../models/pokemon")

//Create Router Object
const router = express.Router()

//Register Routes with the Router
//Index GET /soda
router.get("/", (req, res) => {
  res.render("pokemon/index.ejs", { pokemon: Pokemon.getAll() })
})

//New Route GET /soda/new -> page with a create form
router.get("/new", (req, res) => {
  res.render("pokemon/new.ejs")
})

//Create Route POST /soda -> creates a new soda, redirect back to index
router.post("/", (req, res) => {
  Pokemon.create(req.body)
  res.redirect("/pokemon")
  //res.json(req.body)
})

//Edit Route POST /pokemon/:id/edit -> create form to update pokemon
router.get("/:id/edit", (req, res) => {
  res.render("pokemon/edit.ejs", {
    pokemon: Pokemon.getOne(req.params.id),
    index: req.params.id
  })
})

//Update Route PUT /soda/:id -> receives form data, update soda, redirectss to index
router.put("/:id", (req, res) => {
  Pokemon.update(req.params.id, req.body)
  res.redirect("/pokemon")
  //res.json(req.body)
})

//Destroy Route Delete
router.delete("/:id", (req, res) => {
  Pokemon.destroy(req.params.id)
  res.redirect("/pokemon")
})

//Show Route /pokemon/:id -> page on individual pokemon
router.get("/:id", (req, res) => {
  res.render("pokemon/show.ejs", {
    pokemon: Pokemon.getOne(req.params.id),
    index: req.params.id
    //pokemon: Pokemon[req.params.id]
  });
});

//Export Router
module.exports = router