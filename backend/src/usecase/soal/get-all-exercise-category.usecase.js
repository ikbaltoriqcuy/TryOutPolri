const getAllExerciseCategory = ({ exercise_categoriesDB }) => {
    return async function getAllExerciseCategory(info) {
      const getAllCategories = await exercise_categoriesDB.getAllCategory();  
      return getAllCategories.rows
    };
  };
  module.exports = getAllExerciseCategory;
  