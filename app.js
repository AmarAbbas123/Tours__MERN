const express = require("express");
const connectDatabase = require("./config/Databse");
const dotenv= require("dotenv")
dotenv.config({path:"./config/config.env"})
const app = express();
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes")


// Middleware to parse JSON data
app.use(express.json())
app.use(express.static("./public"))


app.use("/api/tours",tourRouter)
app.use("/api/users",userRouter)

connectDatabase();

const port =process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
