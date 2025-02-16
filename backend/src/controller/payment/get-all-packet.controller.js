const getAllPacketController = ({ getAllPacketUsecase }) => {
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
        };
        const getPacketUsecase = await getAllPacketUsecase(toView);
  
        return {
          headers: {
            "Content-Type": "application/json"
          },
          statusCode: 200,
          body: { 
            name: "get-packet-usecase",
            status: 200,
            data: getPacketUsecase 
          }
        };
      } catch (e) {
        console.log(e);
        return {
          headers,
          statusCode: 400,
          body: {
            name: "get-packet-usecase",
            status: 400,
            error: e.message
          }
        };
      }
    };
  };
  
  module.exports = getAllPacketController;
  