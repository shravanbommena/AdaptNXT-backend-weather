const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");

const app = express();

dotenv.config();

app.use(cors());

app.listen(3000, () => {
  console.log("Server started");
});

app.get("/weather", async (req, res) => {
  const { city } = req.query;
  //   console.log(city);
  const response = await axios.get(
    `http://api.weatherstack.com/current?access_key=${process.env.APIKEY}&query=${city}`
  );
  res.send(response.data);
});
