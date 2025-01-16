const updatePacketQuota = ({ updatePackageQuotaUsecase }) => {
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
          data: httpRequest.body.data
        };
        console.log(toView.data);
        const getPacketUsecase = await updatePackageQuotaUsecase(toView);
  
        return {
          headers: {
            "Content-Type": "application/json"
          },
          statusCode: 200,
          body: { 
            name: "update-packet-quota",
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
            name: "update-packet-quota",
            status: 400,
            error: e.message
          }
        };
      }
    };
  };
  
  module.exports = updatePacketQuota;
  