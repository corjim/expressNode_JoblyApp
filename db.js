"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
// const { getDatabaseUri } = require("./config");
const { DB_URI } = require("./config");

let db = new Client({
  // connectionString: DB_URI // Not compatible
  host: "/var/run/postgresql",
  database: DB_URI
});


// if (process.env.NODE_ENV === "production") {
//   db = new Client({
//     // connectionString: getDatabaseUri(),
//     host: "/var/run/postgresql",
//     getDatabaseUri: ,

//   })
// } else {
//   db = new Client({
//     // connectionString: getDatabaseUri()
//     host: "/var/run/postgresql",
//     database: getDatabaseUri
//   })
// }



db.connect();

module.exports = db;
