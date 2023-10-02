const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 5000;

const toursPath = path.join(__dirname, "dev-data", "data", "tours-simple.json");
const tours = JSON.parse(fs.readFileSync(toursPath));

app.get("/tours", (req, res) => res.status(200).json({
    status:"success",
    results:tours.length,
    data:{
        tours
    }
}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
