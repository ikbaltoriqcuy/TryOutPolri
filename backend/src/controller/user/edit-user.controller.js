const editUserController = ({ updateUserUsecase }) => {
  return async function get(httpRequest) {
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
          user_id: httpRequest.body.user_id,
          name: httpRequest.body.name,
          place_birth : httpRequest.body.place_birth,
          date_birth : httpRequest.body.date_birth,
          address : httpRequest.body.address,
          city : httpRequest.body.city,
          province : httpRequest.body.province,
          subdistrict : httpRequest.body.subdistrict,
          email : httpRequest.body.email,         
          packet_id : httpRequest.body.packet_id,
          phone: httpRequest.body.phone,
          username: httpRequest.body.username
        }
      };
    
      const response = await updateUserUsecase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { 
          name: "edit-user",
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
          name: "edit-user",
          status: 400,
          error: e.message
        }
      };
    }
  };
};

module.exports = editUserController;
