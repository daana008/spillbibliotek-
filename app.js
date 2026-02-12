const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const database = require("./dbconnector.js");

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST"],
    })
);

app.get("/", (req, res) => {
  res.send("velkommen til en ekte spillbibliotek, fra meg");
});

//TODO: Lag et nytt GET-endepunkt som henter alle spill
app.get("/spill", async (req, res) => {
  const query = "SELECT * FROM spill;";

  try {
    const games = await database.query(query);

    res.send(games);
  } catch (error) {
    res.send(error);
    res.status(500).json({ error: "Database error" });
  }
});

//TODO: Lag et POST-endepunkt som legger til nye spill

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});