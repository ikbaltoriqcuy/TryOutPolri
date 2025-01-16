const {
  getAllCategoryExerciseUsecase,
  addExerciseCategoryUsecase,
  deleteExerciseCategoryUsecase,
  addExerciseLogsUsecase,
  deleteExerciseLogsUsecase,
  getAllExerciseLogsUsecase,
  getAllExerciseUsecase,
  updateExerciseLogsUsecase
} = require("../../usecase/soal");

const getAllCategoryExercise = require("./get-all-category.controller");
const addCategoryExercise = require("./add-category.controller");
const deleteCategoryExercise = require("./delete-category.controller");
const addExerciseLogs = require("./add-exercise-logs.controller");
const deleteExerciseLogs = require("./delete-exercise-logs.controller");
const getAllLog = require("./get-all-logs.controller");
const getAllExercise = require("./get-all-exercise.controller");
const updateExerciseLogs = require("./update-exercise.controller");

const getAllCategoryExerciseController = getAllCategoryExercise({ getAllCategoryExerciseUsecase });
const addCategoryExerciseController = addCategoryExercise({ addExerciseCategoryUsecase });
const deleteCategoryExerciseController = deleteCategoryExercise({ deleteExerciseCategoryUsecase });
const addExerciseLogsController = addExerciseLogs({ addExerciseLogsUsecase });
const deleteExerciseLogsController = deleteExerciseLogs({ deleteExerciseLogsUsecase });
const getAllLogController = getAllLog({ getAllExerciseLogsUsecase });
const getAllExerciseController = getAllExercise({ getAllExerciseUsecase });
const updateExerciseLogsController = updateExerciseLogs({ updateExerciseLogsUsecase });

const controller = Object.freeze({
  getAllCategoryExerciseController,
  addCategoryExerciseController,
  deleteCategoryExerciseController,
  addExerciseLogsController,
  deleteExerciseLogsController,
  getAllLogController,
  getAllExerciseController,
  updateExerciseLogsController
});

module.exports = controller;

module.exports = {
  getAllCategoryExerciseController,
  addCategoryExerciseController,
  deleteCategoryExerciseController,
  addExerciseLogsController,
  deleteExerciseLogsController,
  getAllLogController,
  getAllExerciseController,
  updateExerciseLogsController
};
