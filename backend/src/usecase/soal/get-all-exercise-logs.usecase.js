const getAllExerciseLogs = ({ exercise_categoriesDB }) => {
    return async function getAllExerciseLogs(info) {
      const getAllCategories = await exercise_categoriesDB.getExerciseLogs(info.idExercise);  
      return getAllCategories.rows
    };
  };
  module.exports = getAllExerciseLogs;
  