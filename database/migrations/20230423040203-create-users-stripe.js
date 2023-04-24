'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('users_stripe', {
        user_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          foreingKey:true,
          references:{
            model:'users',
            key:'id'
          },
          onUpdate:'CASCADE',
          onDelete:'RESTRICT'
        },
        client_id: {
          type: Sequelize.STRING,
          allowNull:false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },{transaction})
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('users_stripe', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
      
    }
  }
};