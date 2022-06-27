'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
        {
          chairId: 13,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 12,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 11,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 10,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 9,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 8,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 7,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 6,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 5,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 4,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 3,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 2,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chairId: 1,
          imgUrl: 'img.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
