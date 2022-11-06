require("dotenv").config()

// --------- Require express & set app -----------
const express = require("express")
const app = express()


app.get("/", (request, response) => {
	response.send("Welcome to the GitPub App!")
})

// ---------- Listen pn port ------------
app.listen(process.env.PORT, () => {
	console.log("listening in port 3001")
})