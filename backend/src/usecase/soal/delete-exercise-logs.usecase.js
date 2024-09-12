const deleteExerciseLogs = ({ exercise_categoriesDB }) => {
    return async function deleteExerciseLogs(info) {
      console.log(info.idExercise);
      const deleteExercise = await exercise_categoriesDB.deleteExercise(info.idExercise);

      return deleteExercise;
    };
  };
module.exports = deleteExerciseLogs;
  