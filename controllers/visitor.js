const { studentSchema } = require('../models/visitor')
const { trainer, admin, courseCategory } = require("../models/admin")

exports.getIndex = (req, res) => {
    res.render('admin/admin', {
        pageTitle: 'Admin Home'
    })
}

exports.getCoursePage = (req, res) => {
    let { course } = req.params
    console.log(req.params)
    res.render(`visitor/${course}`, {
        pageTitle: course
    })
}

