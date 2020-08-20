import accessEnv from "#root/helpers/accessEnv";

const env = accessEnv("NODE_ENV", "development");
const DB_URI = env == "test" ? 
                accessEnv("TEST_DB_URI", "some_faulty_string") : 
                accessEnv("DB_URI", "some_faulty_string")
                
var Sequelize = require('sequelize');

const db = new Sequelize(DB_URI, {
    dialectOptions: {
        charset: "utf8",
        multipleStatements: true
    },
    logging: false
});

export default db;
