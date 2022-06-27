'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
          {
            userId: 2,
            chairId: 13,
            title: 'great chair',
            reviewLine: '10/10 chair',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 2,
            chairId: 11,
            title: 'great chair',
            reviewLine: '10/10 chair',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 2,
            chairId: 3,
            title: 'great chair',
            reviewLine: '10/10 chair',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 2,
            chairId: 1,
            title: 'great chair',
            reviewLine: '10/10 chair',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 2,
            chairId: 9,
            title: 'great chair',
            reviewLine: '10/10 chair',
            createdAt: new Date(),
            updatedAt: new Date()
          },
    ], {});

  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
