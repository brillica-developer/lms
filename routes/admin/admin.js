const express = require("express")
const router = express.Router()

const { getIndex, get_add_admin,createFileData } = require('../../controllers/admin')

router.get("/", getIndex)
// router.post("/add_admin", get_add_admin)

router.post("/add_admin", createFileData)

module.exports = router 