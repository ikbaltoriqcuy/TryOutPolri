const addUserController = ({ addUserUseCase }) => {
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
        user: {
          name: httpRequest.body.name,
          place_birth : httpRequest.body.place_birth,
          date_birth : httpRequest.body.date_birth,
          address : httpRequest.body.address,
          city : httpRequest.body.city,
          province : httpRequest.body.province,
          subdistrict : httpRequest.body.subdistrict,
          password : httpRequest.body.password,
          email : httpRequest.body.email,         
          packet_id : httpRequest.body.packet_id,
          phone: httpRequest.body.phone,
          username: httpRequest.body.username
        }
      };
      const user = await addUserUseCase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
          name: "register",
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
          name: "register",
          status: 400,
          error: e.message
        }
      };
    }
  };
};

module.exports = addUserController;
