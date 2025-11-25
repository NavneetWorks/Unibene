const express = require("express");
const cors = require("cors");
require("dotenv").config();

/* Database */
const connectDB = require("./config/mongoDB");

/* Routes */
const userRoutes = require("./Routes/userRoutes");
const cartRoutes = require("./Routes/cartRoute");
const adminRoutes = require("./Routes/adminRoutes");
const adminCartRoutes = require("./Routes/adminCartRoutes");
const adminProductRoutes = require("./Routes/adminProductRoutes");
const technologyRoutes = require("./Routes/technologyRoutes");
const courseRoutes = require("./Routes/courseRoutes");
const softwareRoutes = require("./Routes/softwareRoute");
const searchRoutes = require("./Routes/searchRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/deals/technology", technologyRoutes);
app.use("/api/deals/course", courseRoutes);
app.use("/api/deals/software", softwareRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin", adminCartRoutes);
app.use("/api/admin/products", adminProductRoutes);
app.use("/uploads", express.static("Uploads"));

app.get("/", (req, res) => res.status(200).send("Server running."));

const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error("Server start failed:", error);
    process.exit(1);
  }
};

startServer();
