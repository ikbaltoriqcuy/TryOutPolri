const paymentDB = require("../../model/payment/index");

const getAllPacket = require("./get-all-packet.usecase");
const insertPurchasePackage = require("./insert-packet-purchased.usecase");
const getPurchasePackage = require("./get-packet-purchased.usecase");
const updatePackageQuota = require("./update-packet-quota.usecase");

const getAllPacketUsecase = getAllPacket({ paymentDB });
const insertPurchasePackageUsecase = insertPurchasePackage({ paymentDB });
const getPurchasePackageUsecase = getPurchasePackage({ paymentDB });
const updatePackageQuotaUsecase = updatePackageQuota({ paymentDB });

const paymentService = Object.freeze({
    getAllPacketUsecase,
    insertPurchasePackageUsecase,
    getPurchasePackageUsecase,
    updatePackageQuotaUsecase,
});

module.exports = paymentService;
module.exports = { 
    getAllPacketUsecase,
    insertPurchasePackageUsecase,
    getPurchasePackageUsecase,
    updatePackageQuotaUsecase,
 };