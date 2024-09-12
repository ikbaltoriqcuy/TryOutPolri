const router = require("express").Router();
const {
    getProvinceController,
    getCityByIdController,
    getSubdistrictController
} = require("../controller/address/index");
const makeExpressCallback = require("../express-callback/index")


router.get('/province', makeExpressCallback(getProvinceController));
router.post('/city', makeExpressCallback(getCityByIdController));
router.post('/subdistrict', makeExpressCallback(getSubdistrictController));


module.exports = router;