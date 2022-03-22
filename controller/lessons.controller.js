const lessonsInf = require("../services/lessons.service")

// const findlessons = asyncHandler(async (req, res, next) => {
//     const { lessonsId } = req.params;

//     const pet = await lessonsInf.findPetById(petId);
//         res.status(200).json({
//             message: 'The pet was successfully find.',
//             status: 'OK',
//             data: pet
//         });
// })

const registerLessons = async (req, res, next) => {

    const lessonJson = { ...req.body };
    const ownerId = req.body.owner;

    try {
        const lessons = await lessonsInf.registerLessons( lessonJson, ownerId )
        console.log(lessons)
        res.status(200).json({
            message: "La lección fue registrada con exito",
            status: "OK",
            data: lessons
        })
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
        const lessons = await lessonsInf.getByOwner(ownerId)
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

module.exports = { registerLessons, findLessonsByOwner }