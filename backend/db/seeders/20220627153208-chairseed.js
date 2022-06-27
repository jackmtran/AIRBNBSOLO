'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Chairs', [
      {
        name: 'target lawn chair',
        price: 5,
        address: '123 Street St',
        city: 'San Jose',
        state: 'California',
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'goodwill wooden chair',
        price: 2,
        address: '1234 Street St',
        city: 'City',
        state: 'California',
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'target lawn chair 2',
        price: 5,
        address: '123 Street St',
        city: 'San Jose',
        state: 'California',
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'herman miller chair',
        price: 30,
        address: '123 Address St',
        city: 'San Jose',
        state: 'California',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bar Stool',
        price: 100,
        address: '123 Avenue Ave',
        city: 'Los Angeles',
        state: 'California',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'bathroom foot stool',
        price: 2,
        address: '1 Road Rd',
        city: 'City',
        state: 'California',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'floor pillow',
        price: 20,
        address: '2 Street Ave',
        city: 'Another City',
        state: 'California',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dining room chair',
        price: 11,
        address: '1 Two St',
        city: 'City City',
        state: 'California',
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'target lawn chair',
        price: 5,
        address: '123 Street St',
        city: 'San Jose',
        state: 'California',
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'target lawn chair',
        price: 5,
        address: '123 Street St',
        city: 'San Jose',
        state: 'California',
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'target lawn chair',
        price: 5,
        address: '123 Street St',
        city: 'San Jose',
        state: 'California',
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'target lawn chair',
        price: 5,
        address: '123 Street St',
        city: 'San Jose',
        state: 'California',
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'target lawn chair',
        price: 5,
        address: '123 Street St',
        city: 'San Jose',
        state: 'California',
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Chairs', null, {});
  }
};
