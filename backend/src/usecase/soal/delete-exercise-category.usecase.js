const deleteExerciseCategory = ({ exercise_categoriesDB }) => {
    return async function deleteExerciseCategory(info) {
      const deleteCategory = await exercise_categoriesDB.deleteCategory(info.id);  
      return deleteCategory
    };
  };
module.exports = deleteExerciseCategory;
  