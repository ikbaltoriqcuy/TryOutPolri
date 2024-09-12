const addExerciseCategory = ({ exercise_categoriesDB }) => {
    return async function addExerciseCategory(info) {
      const addCategory = await exercise_categoriesDB.addCategory(info.category);  
      return addCategory.rows
    };
  };
module.exports = addExerciseCategory;
  