const TeacherInf = require("../services/teachers.service")
const  { convert }  =  require ( 'exchange-rates-api' ) ;
const lessonsInf = require("../services/lessons.service");


const findTeacher = async (req, res, next) => {
    const { teacherId } = req.params;
    console.log("teacherId", req.params)
    try {
        const teacher = await TeacherInf.findById(teacherId);
        console.log("teacherFind",teacher)
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

  const getTeacher = async (req, res, next) => {
    
    try {
        const teacher = await TeacherInf.findByTeachers();
        console.log("teacherFind", teacher)
        res.status(200).json({
            message: 'Se encontro la lista de profesores.',
            status: 'OK',
            data: teacher,
        });
    } catch (error) {
        res.status(400).json({
            message: 'No se encontro la lista.',
            status: 'Failed',
            data: {},
        });
    }
    
  };

const registerTeacher = async (req, res, next) => {
    const { name, numberId, dateBirth, currency, price, role } = req.body
    const teacherExist = await TeacherInf.findByIdTeacher({numberId})
    if(teacherExist){
        res.status(400).json({
            message: "El profesor ya esta registrado",
            status: "Failed",
            data: {}
        })
    } else {
        if(role === "planta" && currency === "COP" || role === "invitado"){
            const teacher = await TeacherInf.register({ name, numberId, dateBirth, currency, price, role })
            res.status(200).json({
                message: "El profesor fue registrado con exito",
                status: "OK",
                data: teacher
            })
        } else {
            if(role === "planta" && currency !== "COP"){
                res.status(200).json({
                    message: "Tipo de moneda no admitido",
                    status: "Failed",
                    data: {}
                }) 
            }
        }
        
    }
}
const getByMounth= async(req, res, next) => {
    const mounth = req.params
    console.log("mes", mounth)
    try {
        const lessonsMounth = await TeacherInf.findByMounth(mounth)
        console.log("mounth3",lessonsMounth)
        if(lessonsMounth !== []){
          const idTeacher = lessonsMounth.map((item) => item.owner)
          const teachers = await TeacherInf.findByTeachers(idTeacher)
          const totalByTeacher = teachers.map(item => item.maxAllHours*item.price)
          const total = totalByTeacher.reduce((a,b) => a+b)
          console.log(total)
          // console.log("by teachers", teachers)
              res.status(200).json({
                  message: "Se encontraron los profesores.",
                  status: "OK",
                  data: teachers
              })
        } else {
          res.status(200).json({
            message: "No tiene profesores para este mes.",
            status: "OK",
            data: {}
        })
        }
        
    } catch (error) {
        res.status(400).json({
            message: 'No se encontro los profesores.',
            status: 'Failed',
            data: {},
        });
    }
}

const deleteTeacher = async (req, res, next) => {
    const { lessonId } = req.params
    console.log("entra")
    try {
        await TeacherInf.deleteTeacherById(lessonId);
            res.status(200).json({
                message: 'El profesor fue eliminado correctamente',
                status: 'OK',
                data: {}
            });
    } catch (error) {
        res.status(400).json({
            message: 'El profesor no pudo ser eliminado',
            status: 'OK',
            data: {}
        });
    }
}


module.exports = { registerTeacher, findTeacher, getTeacher, getByMounth, deleteTeacher }