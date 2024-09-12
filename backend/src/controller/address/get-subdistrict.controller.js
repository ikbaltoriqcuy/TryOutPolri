const getSubdistrictController = ({ getSubdistrictByIdUsecase }) => {
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
          provinceId: httpRequest.body.provinceId,
          cityId: httpRequest.body.cityId
        };

        console.log("getSubDistrict " + toView);

        const subdistrict = await getSubdistrictByIdUsecase(toView);
        return {
          headers: {
            "Content-Type": "application/json"
          },
          statusCode: 200,
          body: { 
            name: "getSubdistirct",
            status: 200,
            data: subdistrict 
          }
        };
      } catch (e) {
        console.log(e);
        return {
          headers,
          statusCode: 400,
          body: {
            name: "getSubdistirct",
            status: 400,
            error: e.message
          }
        };
      }
    };
  };
  
  module.exports = getSubdistrictController;
  