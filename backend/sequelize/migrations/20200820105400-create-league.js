module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable("league", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: {
            allowNull: false,
            type: DataTypes.UUID
        },
        lat: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        lng: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        price: {
            allowNull: false,
            type: DataTypes.DECIMAL
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {charset: "utf8"})
}

module.exports.down = queryInterface => queryInterface.dropTable("league");

