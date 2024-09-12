const changeUserPassController = ({ changePasswordUsecase }) => {
  return async function putUserPass(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { source = {}, password } = httpRequest.body;
      console.log(password);
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        source,
        email: httpRequest.body.email,
        currentPassword: httpRequest.body.currentPassword,
        newPassword: httpRequest.body.newPassword
      };

      const response = await changePasswordUsecase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
          name: "changePassword",
          status: 200,
          data: response 
        }
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          name: "changePassword",
          status: 400,
          error: e.message
        }
      };
    }
  };
};

module.exports = changeUserPassController;
