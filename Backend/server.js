import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';

import ProductRoute from "./routes/product.js"
const PORT=3000
const app = express();
dotenv.config();

app.use(express.json()); // Allow us to send JSON data to request.body
app.use("/api/products",ProductRoute)
app.listen(PORT, () => {
    connectDb();
    console.log(`Server Started at http://localhost:`+PORT);
})
