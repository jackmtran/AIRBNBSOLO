'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
          {
            title: 'LOVE!',
            reviewLine: 'all time favorite!',
            userId: 2,
            chairId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: 'SO GOOD!',
            reviewLine: 'so cheap!',
            userId: 2,
            chairId: 11,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: 'NEED THIS',
            reviewLine: 'cant get enough',
            userId: 2,
            chairId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: 'best',
            reviewLine: 'buying one now!',
            userId: 2,
            chairId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: 'HATE',
            reviewLine: 'sucks',
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
