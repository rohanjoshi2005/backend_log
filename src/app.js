const express = require('express'); //importing express
const cookieParser = require("cookie-parser")


const app = express();   //the intance of the server created will be stored in this variable 

app.use(express.json()); // used as a middleware to parse the incoming request body
app.use(cookieParser());

/**
 * - Routes Required
 */
const authRouter = require('./routes/auth.routes');
const accountRouter = require('./routes/account.routes');
const  {transactionRoutes}  = require("./routes/transaction.routes");




/**
 * - Using the routes
 */

app.get("/", (req, res) => {
    res.send("Service is running");
});


app.use("/api/auth",authRouter);
app.use("/api/accounts",accountRouter);
app.use("/api/transactions", transactionRoutes);

module.exports = app;  //exporting the app variable to be used in other files