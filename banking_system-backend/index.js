require("dotenv").config();
const Express = require("express");
const cors = require("cors");
const router = require('./routes/route.js');
const connectDb = require('./utils/connection.js');
const bodyParser = require("body-parser")


const app = Express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(router);
connectDb();

app.use("/api/auth",router);



app.listen(process.env.PORT,() =>{
    console.log(`server is running on ${process.env.PORT}`);
});