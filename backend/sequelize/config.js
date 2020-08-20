require("dotenv").config();

module.exports = {
    development: {
        dialect: "mysql",
        seederStorage: "sequelize",
        url: process.env.DB_URI
    },
    test: {
        dialect: "mysql",
        seederStorage: "sequelize",
        url: process.env.TEST_DB_URI
    }
};

