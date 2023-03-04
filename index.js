const mongoose = require("mongoose")
const express = require("express")
const app = express()

const adminRoutes = require("./routes/admin/index")


app.set("view engine", 'ejs')

app.use(express.static('public'))

app.use("/admin", adminRoutes)
// app.use(visitorRoutes)


mongoose.connect(`mongodb+srv://brillicadevelopment:${encodeURIComponent('Develop@Brillica')}@lms.3kr0ehu.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    app.listen(3000)
    console.log("App is listeing at 3000")
}).catch((err) => {
    console.log(err)
})
