const getAllExerciseController = ({ getAllExerciseUsecase }) => {
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
        page: httpRequest.body.page,
        email:  httpRequest.body.email
      };

      const exercise = await getAllExerciseUsecase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
          name: "all-exercise",
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
          name: "all-exercise",
          status: 400,
          error: e.message
        }
      };
    }
  };
};

module.exports = getAllExerciseController;
