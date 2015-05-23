/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-full-calendar',

  included: function(app) {
    this._super.included(app);

		app.import(app.bowerDirectory + '/moment/min/moment.min.js')
    app.import(app.bowerDirectory + '/fullcalendar/dist/fullcalendar.min.js');
    app.import(app.bowerDirectory + '/fullcalendar/dist/fullcalendar.min.css');
  }
};
