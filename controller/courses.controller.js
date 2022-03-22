const CourseInf = require("../services/courses.service")

const registerCourse = async (req,res,next) => {
    const { nameCourse } = req.body
    console.log(nameCourse)
    const courseExist = await CourseInf.findByIdCourse({nameCourse})
    if(courseExist){
        res.status(400).json({
            message: "El curso ya esta registrado",
            status: "Failed",
            data: {}
        })
    } else {
        const newCourse = await CourseInf.register({nameCourse})
        console.log(newCourse)
        res.status(200).json({
            message: "El curso fue registrado con exito",
            status: "OK",
            data: {}
        })
    }
}


module.exports = {registerCourse}