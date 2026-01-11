const express = require('express')
const app = express();
const dotenv = require("dotenv")
const authRoutes = require('./src/routes/auth.route');
const taksRoutes = require("./src/routes/task.route")
const connectDB = require("./src/config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors")
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

connectDB();
const port = 3000;
app.get('/', (req, res) => {
    res.send('backend server is running...')
})
app.use('/api/auth', authRoutes)
app.use('/api/task', taksRoutes)
app.listen(port, () => {
    console.log(`server is running up on port  ${port}`)
})
