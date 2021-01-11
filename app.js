const serverless = require('serverless-http'); 
const express = require('express')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//to handle cors error
var cors = require("cors");
app.use(cors());

let userInfoList = [];
userInfoList.push(
    { Id: 1, Name: "Joe", Mobile: "21321323", Address: "US" },
    { Id: 2, Name: "Bharti", Mobile: "5345345", Address: "Pune" }
);

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/home", (req, res) => {
    res.send({ Welcome: "This is the home page" });
});

app.get("/users", (req, res) => {
    res.send(userInfoList);
});

app.listen(2000,()=> console.log("listening to port 2000"));


module.exports.handler = serverless(app);


// serverless config credentials --provider aws --key AKIATGIZU5ZQFHUPQ64K --secret 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 -o
