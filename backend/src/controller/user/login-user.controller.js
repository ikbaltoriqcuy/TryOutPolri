const loginUserAuthController = ({ loginUsecase }) => {
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
        email : httpRequest.body.email,
        password : httpRequest.body.password
      };

      const user = await loginUsecase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
            name: "login",
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
          name: "login",
          status: 400,
          error: e.message
        }
      };
    }
  };
};

module.exports = loginUserAuthController;
