const updateExerciseLogs = ({ exercise_categoriesDB }) => {
    return async function updateExerciseLogs(info) {
      const updateExerciseLogs = await exercise_categoriesDB.updateExerciseLogs(info.answerSymbol);  
      return updateExerciseLogs
    };
  };
  module.exports = updateExerciseLogs;
  