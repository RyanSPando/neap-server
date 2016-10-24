const faker = require('faker');
const roasts = ['light', 'medium', 'dark'];
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      let promises = [];
      for (var i = 0; i < 10; i++) {
        promises.push(knex('coffee').insert(
          {
            name: faker.commerce.productName(),
            roaster: faker.company.companyName(),
            origin: faker.address.country(),
            roast: faker.random.number({min: 0, max: 2}),
            caffeine: faker.random.number({min: 0, max: 300}),
            decaf: faker.random.boolean(),
            price: faker.random.number({min: 1, max:100}),
            quantity: faker.random.number({min: 0, max: 100})
          }));
        return Promise.all(promises);
      }
    });
};
