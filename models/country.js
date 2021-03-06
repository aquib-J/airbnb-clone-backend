const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    countryName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "countryName"
    }
  };
  const options = {
    tableName: "country",
    comment: "",
    indexes: []
  };
  const CountryModel = sequelize.define("country_model", attributes, options);
  return CountryModel;
};