
const makeDb = require("../../config/db_config");
const db = require("./address.query");

const addressDB = makeDb ({ db });

module.exports = addressDB;
