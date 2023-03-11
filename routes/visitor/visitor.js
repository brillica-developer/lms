const express = require("express")
const router = express.Router()

const { getCoursePage } = require('../../controllers/visitor.js')

router.get("/courses/:course", getCoursePage)

module.exports = router 