const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id"
    },
    bookingId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bookingId",
      references: {
        key: "id",
        model: "Booking_model"
      }
    },
    TransactionID: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "TransactionID",
      unique: "TransactionID"
    },
    totalPaymentAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "totalPaymentAmount"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdAt"
    },
    PaymentStatus: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PaymentStatus"
    }
  };
  const options = {
    tableName: "Payments",
    comment: "",
    indexes: [{
      name: "Payments_fk0",
      unique: false,
      type: "BTREE",
      fields: ["bookingId"]
    }]
  };
  const PaymentsModel = sequelize.define("Payments_model", attributes, options);
  return PaymentsModel;
};