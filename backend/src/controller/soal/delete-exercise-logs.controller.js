const addExerciseLogsController = ({ deleteExerciseLogsUsecase }) => {
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
        idExercise: httpRequest.body.id_exercise
      };

      const exercise = await deleteExerciseLogsUsecase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
          name: "delete-exercis-logs",
          status: 200,
          data: exercise 
        }
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          name: "delete-exercis-logs",
          status: 400,
          error: e.message
        }
      };
    }
  };
};

module.exports = addExerciseLogsController;
