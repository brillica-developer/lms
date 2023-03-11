//IMPORTING PACKAGES
const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")


const app = express()

//IMPORTING ROUTES
const adminRoutes = require("./routes/admin/admin")
const visitorRoutes = require("./routes/visitor/visitor")

//SETTING THINGS UP
app.set("view engine", 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

//USING ROUTES
app.use("/admin", adminRoutes)
app.use(visitorRoutes)

// DATABASE CONNECTIVITY
mongoose.connect(`mongodb+srv://brillicadevelopment:${encodeURIComponent('Develop@Brillica')}@lms.3kr0ehu.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    app.listen(3000)
    console.log("App is listeing at 3000")
}).catch((err) => {
    console.log(err)
})
