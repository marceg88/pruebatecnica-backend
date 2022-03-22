const TeacherInf = require("../services/teachers.service")
const  { convert }  =  require ( 'exchange-rates-api' ) ;

const findTeacher = async (req, res, next) => {
    const { teacherId } = req.params;
    try {
        const teacher = await TeacherInf.findById({teacherId});
        console.log(teacher)
        res.status(200).json({
            message: 'El profesor se encontro en la lista.',
            status: 'OK',
            data: teacher,
        });
    } catch (error) {
        res.status(400).json({
            message: 'El profesor no se encontro en la lista.',
            status: 'Failed',
            data: {},
        });
    }
    
  };

const registerTeacher = async (req, res, next) => {
    const { name, numberId, dateBirth, currency, price, roles } = req.body
    
    const teacherExist = await TeacherInf.findByIdTeacher({numberId})
    console.log(teacherExist)
    if(teacherExist){
        res.status(400).json({
            message: "El profesor ya esta registrado",
            status: "Failed",
            data: {}
        })
    } else {
        const teacher = await TeacherInf.register({ name, numberId, dateBirth, currency, price, roles })
        console.log(teacher)
        res.status(200).json({
            message: "El profesor fue registrado con exito",
            status: "OK",
            data: teacher
        })
    }
}



module.exports = { registerTeacher, findTeacher }