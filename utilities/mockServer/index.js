/* eslint-disable no-console */
const express = require("express");
const app = express();

const PORT = 3001;

const products = [
	{
		"id" : 1,
		"title": "Travel Card Holder",
		"price" : 9.95,
	},
	{
		"id" : 2,
		"title": "Personalised cufflinks",
		"price" : 45.00,
	},
	{
		"id" : 3,
		"title": "Kids T-shirt",
		"price" : 19.95,
	}
];

app.get("/products", (req, res) => {
	res.set("Content-Type", "application/json");
	res.send(JSON.stringify(products));
});

app.listen(PORT, () => console.log(`Mock server running on ${PORT}!`));
