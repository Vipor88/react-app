'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('golfclubs', [
    {
    modelPic: '/images/products/Ping_driver.jpg',
    stripeId: 'price_1N47APF59faQ5nZ69JMyxK0Y',
    modelName: 'Ping G425 Max Driver',
    price: 399,
    productHighlights: '<p className="fw-bold mb-2 small">Product Highlights</p><ul className="small"><li>-Incredibly high MOI</li><li>- 26g tungsten movable CG-shifting weight</li><li>- Neutral, Draw and Fade settings for customized ball flight</li></ul>'
   },
   {
    modelPic: '/images/products/Ping_irons.jpg',
    stripeId: 'price_1N46uGF59faQ5nZ66hjZfh3L',
    modelName: 'Ping G430 Irons',
    price: 1100,
    productHighlights: '<p className="fw-bold mb-2 small">Product Highlights</p><ul className="small"><li>-Multi-material cavity badge improves feel</li><li>-Tungsten toe and shaft tip weights ensure forgiveness</li><li>-Hydropearl 2.0 chrome finish for consistency in wet conditions</li></ul>'
   },
   {
    modelPic: '/images/products/Ping_Putter.jpg',
    stripeId: 'price_1N46kkF59faQ5nZ6YGbbwyz6',
    modelName: 'Ping DS72 Putter',
    price: 379,
    productHighlights: '<p className="fw-bold mb-2 small">Product Highlights</p><ul className="small"><li>Shallow milled face to deliver a firmer feel and consistent ball speed with pleasing acoustics</li> <li>Platinum topline contrasts against the black cavity where a white alignment line and ball-width cavity floor focus the eye</li><li>The more squared off will be aesthetically pleasing to the mid-mallet player</li></ul>'
   },
   {
    modelPic: '/images/products/Taylormade_irons.jpg',
    stripeId: 'price_1N47QNF59faQ5nZ6ipCQvh4u',
    modelName: 'Taylormade 2022 Stealth Irons',
    price: 1600,
    productHighlights: '<p className="fw-bold mb-2 small">Product Highlights</p><ul className="small"><li>Cap Back™ Design with Toe Wrap Construction Expands the distance, forgiveness and feel benefits of the original breakthrough technology.</li></ul>'
   },
   {
    modelPic: '/images/products/Taylormade_Driver.jpg',
    stripeId: 'price_1N47CRF59faQ5nZ6BzgRWsz7',
    modelName: 'Taylormade 2022 Stealth Driver',
    price: 399,
    productHighlights: '<p className="fw-bold mb-2 small">Product Highlights</p><ul className="small"><li>2022 Golf Digest Hot List Gold Winner</li><li>TaylorMades best combination of maximum distance and forgiveness with mid-launch and spin suited for all golfers.</li><li>60X Carbon Twist Face</li></ul>'
   },
   {
    modelPic: '/images/products/Ping_Putter_2.jpg',
    stripeId: 'price_1N4UypF59faQ5nZ6LR9epyYJ',
    modelName: 'PING 2021 Anser 2 Putter',
    price: 199,
    productHighlights: '<p className="fw-bold mb-2 small">Product Highlights</p><ul className="small"><li>2022 Golf Digest Hot List Gold Winner</li></ul>'
   },
   {
    modelPic: '/images/products/Taylormade_putter.jpg',
    stripeId: 'price_1N4V4XF59faQ5nZ6PSRS5dPg',
    modelName: 'TaylorMade TP HydroBlast Soto 1 Putter',
    price: 199,
    productHighlights: '<p className="fw-bold mb-2 small">Product Highlights</p><ul className="small"><li>2022 Golf Digest Hot List Gold Winner</li></ul>'
   },
   {
    modelPic: '/images/products/Taylormade_spider_putter.jpg',
    stripeId: 'price_1N3uYzF59faQ5nZ6gyKrV3IX',
    modelName: 'Taylormade Spider GT',
    price: 249,
    productHighlights: '<p className="fw-bold mb-2 small">Product Highlights</p><ul className="small"><li>Most classically shaped member of the new Spider family</li><li>Lightweight 6061 Aluminum body combines with heavy dual-tungsten weights on the outside heel-toe for stability, forgiveness and distance control</li><li>Heavy tungsten stability bars 172g total strategically wrap around the back and side of the putter for optimal forgiveness and stability</li>'
   }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
