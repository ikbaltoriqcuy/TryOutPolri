const router = require("express").Router();
const {
    getAllCategoryExerciseController,
    addCategoryExerciseController,
    deleteCategoryExerciseController,
    addExerciseLogsController,
    deleteExerciseLogsController,
    getAllLogController
} = require("../controller/soal/index");
const makeExpressCallback = require("../express-callback/index")


// router.get('/users', makeExpressCallback(getAllUsersController));
router.get('/get-all-category-exercise', makeExpressCallback(getAllCategoryExerciseController));
router.post('/add-category-exercise', makeExpressCallback(addCategoryExerciseController));
router.get('/delete-category-exercise', makeExpressCallback(deleteCategoryExerciseController));
router.post('/add-exercise-logs', makeExpressCallback(addExerciseLogsController));
router.post('/delete-exercise-logs', makeExpressCallback(deleteExerciseLogsController));
router.post('/get-excercise-logs', makeExpressCallback(getAllLogController));

module.exports = router;