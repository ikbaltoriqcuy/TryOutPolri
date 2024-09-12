const exercise_categoriesDB = require("../../model/exercise/index");

const getAllCategoryExercise = require("./get-all-exercise-category.usecase");
const addExerciseCategory = require("./add-exercise-category.usecase");
const deleteExerciseCategory = require("./delete-exercise-category.usecase");
const addExerciseLogs = require("./add-exercise-logs.usecase");
const deleteExerciseLogs = require("./delete-exercise-logs.usecase");
const getAllExerciseLogs = require("./get-all-exercise-logs.usecase");

const getAllCategoryExerciseUsecase = getAllCategoryExercise({ exercise_categoriesDB });
const addExerciseCategoryUsecase = addExerciseCategory({ exercise_categoriesDB });
const deleteExerciseCategoryUsecase = deleteExerciseCategory({ exercise_categoriesDB });
const addExerciseLogsUsecase = addExerciseLogs({ exercise_categoriesDB });
const deleteExerciseLogsUsecase = deleteExerciseLogs({ exercise_categoriesDB });
const getAllExerciseLogsUsecase = getAllExerciseLogs({ exercise_categoriesDB });

const exerciseServices = Object.freeze({
  getAllCategoryExerciseUsecase,
  addExerciseCategoryUsecase,
  deleteExerciseCategoryUsecase,
  addExerciseLogsUsecase,
  deleteExerciseLogsUsecase,
  getAllExerciseLogsUsecase
});

module.exports = exerciseServices;

module.exports = {
  getAllCategoryExerciseUsecase,
  addExerciseCategoryUsecase,
  deleteExerciseCategoryUsecase,
  addExerciseLogsUsecase,
  deleteExerciseLogsUsecase,
  getAllExerciseLogsUsecase
};
