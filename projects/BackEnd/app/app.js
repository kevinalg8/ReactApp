import express  from "express"
import userRoutes from "./routes/userRoutes.js";

const app = express()

app.set("PORT",process.env.PORT || 3000);

app.use(express.json());

app.use("/api", userRoutes);

app.use((req, res) => {
    res.status(200).json({message: "Bienvenido al BackEnd de Pruebas"})
})


export default app