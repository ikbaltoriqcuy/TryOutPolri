
const makeDb = require("../../config/db_config");
const db = require("./user.query");

const carDB = makeDb ({ db });

module.exports = carDB;
