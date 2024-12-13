import express from "express";
import cors from "cors";
import vehicleRoutes from "./routes/vehicleRoutes.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: ["https://vehicle-management-system-jhon.vercel.app"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Wellcome our backend !");
});

app.use("/api/vehicles", vehicleRoutes);

app.all("*", (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An internal server error occurred",
  });
});

export default app;
