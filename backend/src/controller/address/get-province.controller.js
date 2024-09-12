const getProvinceController = ({ getAllProvinceUsecase }) => {
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

        const province = await getAllProvinceUsecase(toView);
  
        return {
          headers: {
            "Content-Type": "application/json"
          },
          statusCode: 200,
          body: { 
            name: "getAllProvince",
            status: 200,
            data: province 
          }
        };
      } catch (e) {
        console.log(e);
        return {
          headers,
          statusCode: 400,
          body: {
            name: "getAllProvince",
            status: 400,
            error: e.message
          }
        };
      }
    };
  };
  
  module.exports = getProvinceController;
  