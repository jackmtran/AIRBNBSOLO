'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Chairs', [
      {
        name: 'Plastic stool',
        description: 'This is my fams favorite chair.',
        price: 10,
        address: '123 Street St',
        city: 'Town',
        state: 'California',
        url: "https://i.etsystatic.com/13501444/r/il/73efe3/3306079387/il_1588xN.3306079387_rfe2.jpg",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Goodwill wooden chair',
        description: 'VINTAGE! VINTAGE! rent now.',
        price: 5,
        address: '312 Avenue St',
        city: 'City',
        state: 'California',
        url: "https://lincolngoodwill.org/wp-content/uploads/Stool-Before-1-768x1024.jpg",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amazon Basics Padded Office Chair W/ Armrests',
        description: 'Did the refund scam. Forbes 2023 here I come.',
        price: 10,
        address: '22 Jump St',
        city: 'Metropolis',
        state: 'Evergreen',
        url: "https://m.media-amazon.com/images/I/61v4APY-tIL._AC_SY879_.jpg",
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'herman miller chair',
        description: 'made my back hurt. now its up for chairbnb.',
        price: 100,
        address: '1 Street',
        city: 'Rich City',
        state: 'California',
        url: "https://m.media-amazon.com/images/I/71VVk7m8aIL._AC_SL1500_.jpg",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bar Stool',
        description: 'Great for sitting at a bar.',
        price: 15,
        address: '123 Avenue Ave',
        city: 'Bar',
        state: 'California',
        url: "https://www.zurifurniture.com/common/images/products/thumb/Lush-Barstool-Brushed-Slate-Lifestyle-MAIN.jpg",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'spongebob squatty potty',
        description: 'doubles as a great STOOL.',
        price: 5,
        address: '1 Road Rd',
        city: 'City',
        state: 'California',
        url: "https://target.scene7.com/is/image/Target/GUEST_64b80d49-296f-4378-93aa-9135a66fc115?wid=325&hei=325&qlt=80&fmt=pjpeg",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Floor Pillow',
        description: 'Used as decor but minor stains.',
        price: 20,
        address: '2 Street Ave',
        city: 'Another City',
        state: 'California',
        url: "https://ctl.s6img.com/society6/img/8PuahEHefPlmvj_nKqsuq3bZyMo/w_550/floor-pillows/square/angle/~artwork,fw_4500,fh_4500,iw_4500,ih_4500/s6-0048/a/21107852_13909024/~~/dirty-auo-floor-pillows.jpg",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dining room chair',
        description: 'Solid chair but my wife hates orange.',
        price: 11,
        address: '1 Two St',
        city: 'City City',
        state: 'California',
        url: "https://cdn-images.article.com/products/SKU3064/2890x1500/image38714.jpg?fit=max&w=1920&q=80&fm=webp",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Target lawn chair',
        description: 'got it on sale dont like it',
        price: 15,
        address: '100 Lanes Lane',
        city: 'San Jose',
        state: 'California',
        url: "https://target.scene7.com/is/image/Target/GUEST_170655e5-7f6b-47f8-b6a4-d7e6abeeb856?wid=325&hei=325&qlt=80&fmt=pjpeg",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hand Chair',
        description: 'For when you want to be held.',
        price: 400,
        address: '9 9th Street',
        city: 'Outtacities',
        state: 'California',
        url: "https://secure.img1-fg.wfcdn.com/im/21843303/resize-h445%5Ecompr-r85/6224/62243969/QS+Le+Main+30%2527%2527+Wide+Armchair.jpg",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Seb Chair',
        description: 'fancy date type of chair.',
        price: 55,
        address: '101 Chairs Avenue',
        city: 'Chair',
        state: 'California',
        url: "https://res.cloudinary.com/castlery/image/private/w_1000,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1646900872/crusader/variants/40550196/Seb-Chair-Lifestyle-Crop.jpg",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grizzly Bear Bean Bag',
        description: 'rawrxd',
        price: 90,
        address: 'In the',
        city: 'Forest',
        state: 'California',
        url: "https://cdn11.bigcommerce.com/s-bh3rcbjg/images/stencil/800x800/products/354/618/big-sleeping-grizzly-bear-bean-bag-3__63197.1382736878.jpg?c=2",
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Antique Chair',
        description: 'Very fancy.',
        price: 1000,
        address: '123 Street St',
        city: 'Town',
        state: 'California',
        url: "https://a.1stdibscdn.com/archivesE/upload/1121189/f_143464721555140677281/14346472_master.jpg?width=768",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Chairs', null, {});
  }
};
