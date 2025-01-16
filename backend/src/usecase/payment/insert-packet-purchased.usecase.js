const insertPurchasePackageUsecase = ({ paymentDB }) => {
    return async function insertPurchasePackageUsecase(info) {
      const insertPurchasePackage = await paymentDB.insertPurchasePackage(info.data);
      return insertPurchasePackage.rows;
    };
  };
module.exports = insertPurchasePackageUsecase;
  