
const makeDb = require("../../config/db_config");
const db = require("./payment.query");

const payment_categoriesDB = makeDb ({ db });

module.exports = payment_categoriesDB;
