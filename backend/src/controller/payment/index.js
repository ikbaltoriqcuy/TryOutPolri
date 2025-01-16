const getAllPacket = require("./get-all-packet.controller");
const insertPacketPurchased = require("./insert-packet-purchased.controller");
const updatePackageQuota = require("./update-packet-quota.controller");

const { getAllPacketUsecase, insertPurchasePackageUsecase, updatePackageQuotaUsecase} = require("../../usecase/payment/index");

const getAllPacketController = getAllPacket({getAllPacketUsecase});
const insertPurchasePackageController = insertPacketPurchased({insertPurchasePackageUsecase})
const updatePacketQuotaController = updatePackageQuota({updatePackageQuotaUsecase});

const controller = Object.freeze({
  getAllPacketController,
  insertPurchasePackageController,
  updatePacketQuotaController,
});

module.exports = controller;

module.exports = {
    getAllPacketController,
    insertPurchasePackageController,
    updatePacketQuotaController,
};
