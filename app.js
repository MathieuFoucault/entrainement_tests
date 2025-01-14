import express from "express";

const app = express();

const port = 3000;

app.get("/api/wilders", (req, res) => {
	const wilders = ["Romain", "Christine", "Mathilde", "Victor"];
	res.json(wilders);
});

module.exports = app;
