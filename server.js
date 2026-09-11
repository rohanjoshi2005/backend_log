require("dotenv").config();  //loading the dotenv file

const app = require('./src/app'); //importing the app variable from apps.js
const connectToDB = require('./src/config/db'); //importing the connectToDB function from db.js`

connectToDB();  //calling the connectToDB function


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});