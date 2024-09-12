const deleteCategoryExerciseController = ({ deleteExerciseCategoryUsecase }) => {
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
        id: httpRequest.body.id
      };
      const exerciseCategory = await deleteExerciseCategoryUsecase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
          name: "delete-category",
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
          name: "delete-category",
          status: 400,
          error: e.message
        }
      };
    }
  };
};

module.exports = deleteCategoryExerciseController;
