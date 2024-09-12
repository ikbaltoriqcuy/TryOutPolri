const dotenv = require("dotenv");
const pg = require("pg");
dotenv.config();

const config = {
  user: process.env.PG_USER || "police_course",
  database: process.env.PG_DATABASE || "police_course",
  password: process.env.PG_USERPASS || "@PoliceCourse12",
  port: process.env.PG_PORT,
  host: process.env.PG_HOST,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
};

const pool = new pg.Pool(config);

async function dbs() {
  try {
    return pool;
  } catch (e) {
    pool.end(); // end connection
    console.log("Errors: ", e);
  }
}

const makeDb = ({db}) => {
  return db({dbs});
};

module.exports = makeDb;
