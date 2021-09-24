import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import chapterRoutes from "./routes/chapter.routes";
import usersRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

import { createRoles, createAdmin} from "./libs/initialSetup";

const app = express();
createRoles();
createAdmin();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);

app.get("/", (req, res) => {
  res.json({message: "Funcionando..."});
});

// Middlewares
const corsOptions = {
  // origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/chapters", chapterRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

export default app;
