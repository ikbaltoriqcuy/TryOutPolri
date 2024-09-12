const addExerciseLogs = ({ exercise_categoriesDB }) => {
    return async function addExerciseLogs(info) {
      const addExercise = await exercise_categoriesDB.addExercise(info.exercise);

      if (addExercise.rowCount !== 0) { 
        const exerciseId = addExercise.rows[0].exercise_id;
        const insertExcrciseLogs = await exercise_categoriesDB.addExerciseLogs(info.exerciseLogs, exerciseId);
        return insertExcrciseLogs.rows;
      } else {
        return addExercise.rows;
      }
    };
  };
module.exports = addExerciseLogs;
  