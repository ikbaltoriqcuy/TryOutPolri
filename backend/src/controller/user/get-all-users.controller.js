const fetchAllUsersController = ({ viewAllUsersUseCase }) => {
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
        source
      };
      const users = await viewAllUsersUseCase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
          name: "getAllUsers",
          status: 200,
          data: users 
        }
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          name: "getAllUsers",
          status: 400,
          error: e.message
        }
      };
    }
  };
};

module.exports = fetchAllUsersController;
