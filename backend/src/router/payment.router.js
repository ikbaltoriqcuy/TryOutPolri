const router = require("express").Router();
const {
    getAllPacketController,
    insertPurchasePackageController,
    updatePacketQuotaController,
} = require("../controller/payment/index");
const makeExpressCallback = require("../express-callback/index")

router.post('/get-all-packet', makeExpressCallback(getAllPacketController));
router.post('/insert-packet-purchased', makeExpressCallback(insertPurchasePackageController));
router.post('/update-packet-quota', makeExpressCallback(updatePacketQuotaController));
router.post('/getipaymu', makeExpressCallback(updatePacketQuotaController));

const apikey = "QbGcoO0Qds9sQFDmY0MWg1Tq.xtuh1";
const va = "1179000899";
const url = "https://sandbox.ipaymu.com/api/v2/payment/direct"; // development mode
// const url = 'https://my.ipaymu.com/api/v2/payment/direct'; // production mode

// Route for getting iPaymu payment details (this is your endpoint that makes the API call)
router.post("/getipaymu", async (req, res) => {
    try {
        const body = {
            name: "Putu",
            phone: "08123456789",
            email: "putu@gmail.com",
            amount: 10000,
            comments: "Payment to XYZ Store",
            notifyUrl: "https://your-website.com/callback-url", // your callback url
            referenceId: "1234", // your reference id or transaction id
            paymentMethod: "va",
            paymentChannel: "bca",
        };

        // Generate signature for the iPaymu API request
        const bodyEncrypt = CryptoJS.SHA256(JSON.stringify(body)); // Hash body
        const stringToSign = `POST:${va}:${bodyEncrypt}:${apikey}`; // Construct the string to sign
        const signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(stringToSign, apikey)); // HMAC SHA256 signature

        // Send the request to the iPaymu API
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                va: va,
                signature: signature,
                timestamp: new Date().toISOString().replace(/[-:]/g, "").slice(0, 14), // Format timestamp: YYYYMMDDhhmmss
            },
            body: JSON.stringify(body),
        });

        // Parse and return the API response
        const responseJson = await response.json();
        res.json(responseJson); // Send the response to the client

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;