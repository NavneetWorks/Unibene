const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/mongoDB");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server running."));

const startServer = async () => {
  await connectDB();
  app.listen(process.env.PORT || 3000, () =>
    console.log("Server started on port " + (process.env.PORT || 3000))
  );
};

startServer();
