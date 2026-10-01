import express from "express";
import UserRoutes from "./routes/user_route.js";
import database from "./database/database.js";
import authRoutes from "./routes/auth_route.js";


const app = express();
app.use(express.json());
const PORT = 5000;



app.use("/api", UserRoutes);
app.use("/api", authRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});