'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        username: 'Andy',
        password: await bcrypt.hash('123456789', 12),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'Bobby',
        password: await bcrypt.hash('123456789', 12),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'Cathy',
        password: await bcrypt.hash('123456789', 12),
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

