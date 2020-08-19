module.exports = function (app) {
    const order = require('./order.route');
    const account = require('./account.route');
    const inventory = require('./inventory.route');

    app.use('/api/order', order);
    app.use('/api/account', account);
    app.use('/api/inventory', inventory);
    
  };