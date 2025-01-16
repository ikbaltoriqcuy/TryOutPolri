const getAllExercise = ({ exercise_categoriesDB }) => {
    return async function getAllExercise(info) {
      const getAllExercise = await exercise_categoriesDB.getAllExercise(info.page, info.email);  
      return getAllExercise
    };
  };
  module.exports = getAllExercise;
  