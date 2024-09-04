import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import path from "path";

import ProductRoute from "./routes/product.js"
const PORT=3000
const app = express();
dotenv.config();
const __dirname=path.resolve()  //get value from path
app.use(express.json()); // Allow us to send JSON data to request.body
app.use("/api/products",ProductRoute)
// when  you deploy react application you basically run npm build dev
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/Frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
	});
}
app.listen(PORT, () => {
    connectDb();
    console.log(`Server Started at http://localhost:`+PORT);
})
