const addExerciseLogsController = ({ addExerciseLogsUsecase }) => {
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
        exercise: httpRequest.body.exercise,
        exerciseLogs: httpRequest.body.exercise_logs
      };

      const exercise = await addExerciseLogsUsecase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
          name: "add-exercis-logs",
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
          name: "add-exercis-logs",
          status: 400,
          error: e.message
        }
      };
    }
  };
};

module.exports = addExerciseLogsController;
