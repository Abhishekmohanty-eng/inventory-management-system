const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
const route = require("./routers/router")
require("dotenv").config();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.DB, {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))

app.use('/', route);
app.all("/*", function (req, res) {
    res.status(404).send({
        message: "Invalid URL  plzz enter valid url"
    })
})



app.listen(process.env.PORT || 3004, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
