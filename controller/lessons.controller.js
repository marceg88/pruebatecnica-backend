const lessonsInf = require("../services/lessons.service")
const teacherInf = require("../services/teachers.service")

const registerLessons = async (req, res, next) => {

		const lessonJson = { ...req.body }
		const ownerId = req.body.owner
		const courseId = req.body.nameCourse
		const mounthId = req.body.mounth
		
		try {	
      const allLessons = await lessonsInf.getByOwner(ownerId, mounthId)
      if(allLessons.length){
        allHourCourse = allLessons.map(item => item.nameCourse)
        allHours = allLessons.map(item => item.hours)
        maxAllHour = allHours.reduce((a,b) => a+b)
              
        const teachersHours = await teacherInf.findByIdHours(ownerId, maxAllHour)
          
          if(maxAllHour<=160){
              
                  const lessons = await lessonsInf.registerLessons( lessonJson, ownerId )
                  console.log(lessons)
                  res.status(200).json({
                      message: "La lección fue registrada con exito",
                      status: "OK",
                      data: lessons
                  })
          } else {
              res.status(400).json({
                  message: "Excede las 160horas que puede trabajar por mes",
                  status: "OK",
                  data: {}
              })
          
          }
          
      } else {
          
          const lessons = await lessonsInf.registerLessons( lessonJson, ownerId )
          console.log(lessons)
                  res.status(200).json({
                      message: "La lección fue registrada con exito",
                      status: "OK",
                      data: lessons
                  })
      }				
		} catch (error) {
				res.status(400).json({
						message: "La lección no pudo ser registrada con exito",
						status: "Failed",
						data: {}
				})
		}    
}
const findLessonsByOwner = async (req, res, next) => {
		try{
				const ownerId = req.params.teacherId;
				console.log(ownerId)
				const lessons = await lessonsInf.getByOwnerAll(ownerId)
				
				if(lessons.length){
						res.status(200).json({
								message: 'Se encontro la lista de cursos',
								status: 'OK',
								data: lessons
						});
				}else{
						res.status(201).json({
								message: `No se encontro la lista de cursos`,
								status: 'OK',
								data: []
						});
				}
		} catch (error) {
				res.status(503).json({
						message: 'no se encontro el recurso',
						status: 'Failed',
						data: error
				});
		}
}
const findLessonsByCourse = async (req, res, next) => {
		try{
				const coursesId = req.params;
				const lessons = await lessonsInf.getBylessons({coursesId})
				console.log("coursesId", lessons)
				if(lessons.length){
						res.status(200).json({
								message: 'Se encontro el curso',
								status: 'OK',
								data: lessons
						});
				}else{
						res.status(201).json({
								message: `No se encontro el curso`,
								status: 'OK',
								data: []
						});
				}
		} catch (error) {
				res.status(503).json({
						message: 'no se encontro el recurso',
						status: 'Failed',
						data: error
				});
		}
}



module.exports = { registerLessons, findLessonsByOwner, findLessonsByCourse }