const fetchUserDetailsController = ({ getUserByIdUsecase }) => {
  return async function getDetails(httpRequest) {
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

      const user = await getUserByIdUsecase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
          name: "getUserById",
          status: 200,
          data: user
        }
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          name: "getUserById",
          status: 200,
          error: e.message
        }
      };
    }
  };
};

module.exports = fetchUserDetailsController;
