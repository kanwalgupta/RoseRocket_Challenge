const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const grid = require("./routes/api/gridDetails");
app.use(bodyParser.json());

app.use("/",grid);
const port = process.env.PORT || 8000;

app.listen(port,() => console.log(`Server listening on port ${port}`));