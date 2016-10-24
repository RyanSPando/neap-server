(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const coffees = require('../routes/coffees');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/coffees', coffees);

  };

})(module.exports);
