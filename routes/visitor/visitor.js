const express = require("express")
const router = express.Router()

const { getStudents } = require('../../controllers/visitor.js')

router.get("/", getStudents)

module.exports = router 