const addCategoryExerciseController = ({ addExerciseCategoryUsecase }) => {
  return async function post(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source,
        category: httpRequest.body.category
      };
      const exerciseCategory = await addExerciseCategoryUsecase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
          name: "add-category-controller",
          status: 200,
          data: exerciseCategory 
        }
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          name: "add-category-controller",
          status: 400,
          error: e.message
        }
      };
    }
  };
};

module.exports = addCategoryExerciseController;
