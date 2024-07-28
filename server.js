const { GoogleGenerativeAIResponseError } = require("@google/generative-ai");
const mongoose = require("mongoose");
const generateRoutes = require("./routes/genrativeResponse");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

//configure
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/gen", generateRoutes);
app.use("/auth", authRoutes);

app.listen(4000, () => {
  console.log("server started");
  mongoose
    .connect(process.env.MONGO_CONNECTION_URL)
    .then(console.log("Db connected suceffuly"))
    .catch((e) => {
      console.log(e.message);
    });
});
