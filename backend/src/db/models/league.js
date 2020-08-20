'use strict';


module.exports = (sequelize, DataTypes) => {
    var League = sequelize.define('League', {
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
        }
    }, {tableName: "league"});

    // League.associate = function (models) {
    //     this.belongsTo(models.Shipment, {
    //         foreignKey: 'shipmentId',
    //         as: 'shipment',
    //         onDelete: 'cascade',
    //         hooks: true,
    //     });
    // };

    return League;
};
