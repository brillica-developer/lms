const mongoose = require("mongoose")

const Schema = mongoose.Schema


// Admin Authentication
const admin = new Schema({
    email: {
        type: "String",
        required: true
    },
    password: {
        type: "String",
        required: true
    },
}, { timestamps: true })


// Course category
const courseCategory = new Schema({
    course_id: {
        type: "String",
        required: true
    },
    course_name: {
        type: "String",
        required: true
    },
    logo: {
        type: "String",
        required: false
    }
})

// Placement Data

const placement = new Schema({
    student_id: {
        type: "String",
        required: false
    },
    student_name: {
        type: "String",
        required: false
    },
    pic: {
        type: "String",
        required: false
    },
    description: {
        type: "String",
        required: false
    },
    company_logo: {
        type: "String",
        required: false
    },
    priority: {
        type: "Number",
        required: true
    },
    package: {
        type: "String",
        required: false
    }

})

// Trainer 

const trainer = new Schema({
    trainer_id: {
        type: "String",
        required: true
    },
    trainer_name: {
        type: "String",
        required: true
    },
    expertise: {
        type: "String",
        required: false
    },
    pic: {
        type: "String",
        required: false
    }
})

// Testimonial

const testimonial = new Schema({
    user_name: {
        type: "String",
        required: false
    },
    review: {
        type: "String",
        required: false
    },
    rating: {
        type: "Number",
        required: false
    },
    pic: {
        type: "String",
        required: false
    },
    priority: {
        type: "Number",
        required: false
    }
})

//college

const college = new Schema({
    college_name: {
        type: "String",
        required: true
    },
    college_id: {
        type: "String",
    },
    matching: [

    ]
})

// home counter

const homeCounter = new Schema({
    counter_title: {
        type: "String"
    },
    counter_value: {
        type: "Number"
    },
    priority: {
        type: "Number"
    }
})

//  Sub Category

const subCategory = new Schema({
    sub_course_id: {
        type: "String"
    },
    course_category_id: {
        type: "String"
    },
    course_heading: {
        type: "String",
    },
    description: {
        type: "String"
    },
    mode: {
        type: "String"
    },
    course_logo: {
        type: "String"
    },
    course_points: [
        {
            icon: {
                type: "String"
            },
            title: "String"
        }

    ],
    course_curriculum:[
{
    heading:{
        type:"String"
    },
    priority:{
        type:"String"
    },
    description:{
        type:"String"
    }
}
    ],
    tools:[
        {
            tool_name:{
                type:"String"
            },
            logo:{
                type:"String"
            },
            link:{
                type:"String"
            },
            priority:{
                type:"String"
            }
        }
    ],
    projects:[
        {
            project_name:{
                type:"String"
            },
            priority:{
                type:"String"
            }
        }
    ],
    who_can_apply:[],
    job_roles:[{
        designation:{
            type:"String"
        },
        description:{
            type:"String"
        },
        priority:{
            type:"String"
        }
    }],
    faculty:[
        {
            faculty_name:{
                type:"String"
            },
            faculty_id:{
                type:"String"
            },
            faculty_name: {
                type:"String"
                },
            pic:{
                type:"String"
            },
            description:{
                type:"String"
            }
            

        }
    ],
    related_course:[],
    related_blogs:[],
    faq:[
        {
            title:{
                type:"String"
            },
            priority:{
                type:"Number"
            },
            description:{
                type:"String"
            }
        }
    ],
    page_title:{
        type:"String"
    },
    meta_description:{
        type:"String"
    },
    keywords:{
        type:"String"
    },
    page_name:{
        type:"String"
    }




})


exports.admin = mongoose.model("admin", admin)
exports.courseCategory = mongoose.model("course_category", courseCategory)
exports.placement = mongoose.model("placement", placement)
exports.trainer = mongoose.model("trainer", trainer)
exports.college = mongoose.model("college", college)
exports.testimonial = mongoose.model("testimonial", testimonial)
exports.homeCounter = mongoose.model("home_counter", homeCounter) 
exports.subCategory = mongoose.model("sub_category", subCategory)