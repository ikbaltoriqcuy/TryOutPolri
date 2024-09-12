const getExerciseLogsController = ({ getAllExerciseLogsUsecase }) => {
  return async function getAll(httpRequest) {
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
        idExercise: httpRequest.body.id_exercise
      };

      const exerciseLogs = await getAllExerciseLogsUsecase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
          name: "all-categories",
          status: 200,
          data: exerciseLogs 
        }
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          name: "all-categories",
          status: 400,
          error: e.message
        }
      };
    }
  };
};

module.exports = getExerciseLogsController;
