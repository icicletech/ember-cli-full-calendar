import Ember from 'ember';

export default Ember.Controller.extend({
  fullCalendar2: null,

  actions: {
    prev: function() {
      this.get('fullCalendar2').send('prev');
    },

    next: function() {
      this.get('fullCalendar2').send('next');
    },

    nextYear: function() {
      this.get('fullCalendar2').send('nextYear');
    },

    prevYear: function() {
      this.get('fullCalendar2').send('prevYear');
    },

    today: function() {
      this.get('fullCalendar2').send('today');
    },

    gotoDate: function() {
      this.get('fullCalendar2').send('gotoDate', new Date(2014, 1, 1));
    },

    incrementDate: function() {
      this.get('fullCalendar2').send('incrementDate', {months:1});
    }
  }
});
