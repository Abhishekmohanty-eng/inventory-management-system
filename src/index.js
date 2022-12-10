const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const route = require("./routers/router")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://ABHI:1rgLK1SKF60O1lEF@cluster0.skx8q.mongodb.net/INVENTORY-MANAGEMENT", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))

app.use('/', route);



app.listen(process.env.PORT || 3004, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
