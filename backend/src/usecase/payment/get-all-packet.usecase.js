const getPacketUsecase = ({ paymentDB }) => {
    return async function getPacketUsecase() {
      const getPacketUsecase = await paymentDB.getAllPaymentPacket();
      return getPacketUsecase.rows;
    };
  };
module.exports = getPacketUsecase;
  