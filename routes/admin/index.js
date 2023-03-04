
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Request Accepted")
})



module.exports = router