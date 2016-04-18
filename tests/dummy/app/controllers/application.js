import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['from', 'to'],
  events: null,
  accessToFullCalendar: null,

  eventRender: function(event, element) {
      element.children().children().attr("data-content", event.projectName + ' - ' + event.userName + ' - ' + event.hours + 'hr(s)');
      element.children().children().popup({
          on: 'hover'
      });
  },

  actions: {
      prev: function() {
          this.get('accessToFullCalendar').send('prev');
      }
  }
});
