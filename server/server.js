import express from "express";
import connectDB from "./src/config/DB.js";
import cors from "cors";
import helmet from "helmet";
import ErrorHandler from "../server/src/middleware/errorHandler.middleware.js"
import userRoutes from "./src/routes/user.routes.js"
import cartRoutes from "./src/routes/cart.routes.js"

const app = express();
const PORT = process.env.PORT || 5000


//middleaeware
app.use(express.json())
app.use(cors())
// app.use(helmet())
//data abs
connectDB();


// after rouytess
app.use("/api",userRoutes)
app.use("/api",cartRoutes)
app.use(ErrorHandler)

app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`)
})