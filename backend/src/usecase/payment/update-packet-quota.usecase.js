const updatePacketQuotaUsecase = ({ paymentDB }) => {
    return async function updatePacketQuotaUsecase(info) {
      const insertPurchasePackage = await paymentDB.updatePackageQuota(info.data);
      return insertPurchasePackage.rows;
    };
  };
module.exports = updatePacketQuotaUsecase;
  