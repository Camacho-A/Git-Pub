require("dotenv").config()

const { request, response } = require("express")
// --------- Require express & set app -----------
const express = require("express")
const app = express()

// gets the drinks database (array)
const drinks = require("./models/drinks")

app.get("/drinks/", (request, response) => {
	response.render("drinks_index.ejs", {drinks})
})

app.get("/", (request, response) => {
	response.send("Welcome to the GitPub App!")
})

app.get("/drinks/:id", (request, response) => {
	response.render("drinks_show.ejs", {
		drink: drinks[request.params.id],
	
	})
})


// ---------- Listen pn port ------------
app.listen(process.env.PORT, () => {
	console.log("listening in port 3001")
})