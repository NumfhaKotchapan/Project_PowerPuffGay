import express from "express";
import cors from "cors";


import userRoutes from "./routes/userRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";


const app = express();

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow request from other origin (Frontend which is at different port)
app.use(cors());


app.use("/users", userRoutes); // เส้นทางสำหรับ Users
app.use("/rooms", roomRoutes); // เส้นทางสำหรับ Rooms
app.use("/reservations", reservationRoutes); // เส้นทางสำหรับ Reservations

// การจัดการเส้นทางที่ไม่พบ
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});


export default app;
