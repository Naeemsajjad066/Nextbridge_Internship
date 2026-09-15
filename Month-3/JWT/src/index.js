import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middlewares/ErrorMiddleware.js";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Users");
});

app.use("/users", userRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});