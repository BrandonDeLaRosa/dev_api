'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_stripe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users_stripe.belongsTo(models.Users, {as: 'user', foreignKey: 'user_id'})
    }
  }
  users_stripe.init({
    user_id: {
      type: DataTypes.UUID,
      allowNull:false,
      primaryKey:true  
    },
    client_id: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'users_stripe',
    tableName: 'users_stripe'
  });
  return users_stripe;
};