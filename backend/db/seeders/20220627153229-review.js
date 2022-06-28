'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
          {
            title: 'great chair',
            reviewLine: '10/10 chair',
            userId: 2,
            chairId: 13,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: 'great chair',
            reviewLine: '10/10 chair',
            userId: 2,
            chairId: 11,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: 'great chair',
            reviewLine: '10/10 chair',
            userId: 2,
            chairId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: 'great chair',
            reviewLine: '10/10 chair',
            userId: 2,
            chairId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: 'great chair',
            reviewLine: '10/10 chair',
            userId: 2,
            chairId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
          },
    ], {});

  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
