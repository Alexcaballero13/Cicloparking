const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('CicloParking', {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Localizacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Cupo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Kit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Senalizacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Lampara: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EstadoCiclo: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            timestamps: false,
            createdAt: false
        });
};