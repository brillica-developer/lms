const { admin, college } = require("../models/admin")

const path = require("path")
const fs = require("fs")


exports.getIndex = (req, res) => {
    res.render('admin/admin', {
        pageTitle: 'Admin Home'
    })
}

exports.get_add_admin = async (req, res) => {
    // console.log(req.body)
    // const { college_name,
    //     college_id, matching } = req.body
    // try {
    //     const response = await college.create({ college_name, college_id, matching })
    //     res.status(200).json(response)
    // }
    // catch (err) {
    //     res.status(404).json({ error: err.message })
    // }
    console.log(req.body)
    const { title } = req.body
    const p = path.join(__dirname, "..", "views", "visitor", title + ".ejs")
    const p1 = path.join(__dirname, "..", "views", "visitor", "dummy.ejs")
    fs.readFile(p1, (err, fileContent) => {
        if (!err) {
            fs.writeFile(p, fileContent, (err) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("File Created")
                }
            })
        }
    })
}

exports.createFileData = (req, res) => {
    const { title } = req.body
    res.render(`visitor/${title}`, {
        pageTitle: title,
        data:{}
    })
}

