const getPurchasePackageUsecase = ({ paymentDB }) => {
    return async function getPurchasePackageUsecase(info) {
      const getPurchasePackage = await paymentDB.getPurchasePackage(info.user_id);
      return getPurchasePackage.rows;
    };
  };
module.exports = getPurchasePackageUsecase;
  