'use strict';

const bcrypt = require('bcryptjs')


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-lition',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'FakeUser1',
        email: 'user1@user.io',
        hashedPassword: bcrypt.hashSync('password2'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'FakeUser2',
        email: 'user2@user.io',
        hashedPassword: bcrypt.hashSync('password3'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Demo',
        email: 'DemoDemo@gmail.com',
        hashedPassword: bcrypt.hashSync('password4'),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          username: 'apple',
          email: 'apple@gmail.com',
          hashedPassword: bcrypt.hashSync('password5'),
          createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            username: 'banana',
            email: 'banana@gmail.com',
            hashedPassword: bcrypt.hashSync('password6'),
            createdAt: new Date(),
              updatedAt: new Date()
            },
      {
        username: 'cookie',
        email: 'cookie@gmail.com',
        hashedPassword: bcrypt.hashSync('password7'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'dookie',
        email: 'dookie@gmail.com',
        hashedPassword: bcrypt.hashSync('password8'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'eggs',
        email: 'eggs@gmail.com',
        hashedPassword: bcrypt.hashSync('password9'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'fries',
        email: 'fries@gmail.com',
        hashedPassword: bcrypt.hashSync('password10'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'grass',
        email: 'grass@gmail.com',
        hashedPassword: bcrypt.hashSync('password11'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
