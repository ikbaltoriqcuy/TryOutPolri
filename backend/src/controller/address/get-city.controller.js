const getCityController = ({ getCityByIdUsecase }) => {
    return async function getCityController(httpRequest) {
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
          provinceId: httpRequest.body.provinceId
        };
        const city = await getCityByIdUsecase(toView);
        return {
          headers: {
            "Content-Type": "application/json"
          },
          statusCode: 200,
          body: { 
            name: "getCity",
            status: 200,
            data: city 
          }
        };
      } catch (e) {
        console.log(e);
        return {
          headers,
          statusCode: 400,
          body: {
            name: "getCity",
            status: 400,
            error: e.message
          }
        };
      }
    };
  };
  
  module.exports = getCityController;
  