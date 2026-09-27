import express from "express";
import UserRoutes from "./routes/user_route.js";
import database from "./database/database.js";
import authRoutes from "./routes/auth_route.js";


const app = express();
app.use(express.json());
const PORT = 5000;



app.use("/api", UserRoutes);
app.use("/api", authRoutes);
// app.get("/", (req, res) => {
//   res.send("Backend is running!");
// });


// app.get("/user", (req, res) => {
//   const user = {
//     username: "Yogesh Phuyal",
//     email: "yogesh@gmail.com",
//     phone_number: "9800000000",
//     address: "Gothgaun, Morang",
//     role: "user",
//   };
//   console.log(user);
//   res.send(user);
// });

// app.post("/post-user", (req, res) => {
//     const{ username, password} = req.body;
//     res.send({username: username, password: password});
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});