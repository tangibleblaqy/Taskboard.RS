import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { tareasRouter } from "./routes/tareas-routes.js";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.resolve(__dirname, "../../public");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/tareas", tareasRouter);
app.use(express.static(publicPath));
app.use((req, res, next) => {
  if (req.path.startsWith("/api/")) return next();
  res.sendFile(path.join(publicPath, "index.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  const status = err.status || 500;
  if (status >= 400 && status < 500) {
    return res.status(status).json({ error: err.message });
  }
  return res.status(500).json({
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Error interno del servidor",
  });
});

export default app;
