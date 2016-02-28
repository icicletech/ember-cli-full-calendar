import Ember from 'ember';

export default Ember.Controller.extend({
  fullCalendar2: null,
  fullCalendar1: null,

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
    },

    renderEvent: function() {
      var date = new Date();
      date.setHours(0,0,0,0);
      var dateSeconds = date.getTime();
      var msInDay = 60 * 60 * 24 * 1000;
      var msInHour = 60 * 60 * 1000;

      this.get('fullCalendar1').send(
        'renderEvent',
        {
          title: "Event added by button",
          start: (dateSeconds),
          end: (dateSeconds + msInHour * 5)
        }
      );
    },

    rerenderEvents: function() {
      this.get('fullCalendar1').send('rerenderEvents');
    }
  },

  events: Ember.computed('', function() {
    var date = new Date();
    date.setHours(0,0,0,0);
    var dateSeconds = date.getTime();
    var msInDay = 60 * 60 * 24 * 1000;
    var msInHour = 60 * 60 * 1000;
    var msInHalfHour = 60 * 30 * 1000;

    var events = [
      {
        title: 'All Day Event',
        start:  date.getFullYear() + '-' +
                ('0' + (date.getMonth()+1)).slice(-2) + '-' +
                ('0' + (date.getDate())).slice(-2),
      },
      {
        title: 'Long Event',
        start: (dateSeconds + msInDay),
        end: (dateSeconds + msInDay * 5 + msInHour * 4)
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: dateSeconds + msInDay * 2
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: dateSeconds + msInDay * 4
      },
      {
        title: 'Conference',
        start: dateSeconds + msInDay * 6,
        end: dateSeconds + msInDay * 9
      },
      {
        title: 'Meeting',
        start: dateSeconds + msInDay * 3 + msInHour * 10,
        end: dateSeconds + msInDay * 3 + msInHour * 12 + msInHalfHour
      },
      {
        title: 'Lunch',
        start: dateSeconds + msInDay * 3 + msInHour * 14
      },
      {
        title: 'Interview phone call',
        start: dateSeconds + msInDay * 3 + msInHour * 14
      },
      {
        title: 'Meeting',
        start: dateSeconds + msInDay * 3 + msInHour * 16  + msInHalfHour
      },

      {
        title: 'Happy Hour',
        start: dateSeconds + msInDay * 3 + msInHour * 18  + msInHalfHour
      },
      {
        title: 'Dinner',
        start: dateSeconds + msInDay * 3 + msInHour * 19
      },
      {
        title: 'Birthday Party',
        start: dateSeconds + msInDay * 3 + msInHour * 20
      }
    ];
    return events;
  }),

  /**
   * Header setting for full calendar
   */
  fcHeader: Ember.computed('', function() {
    return {
      left: "month,agendaWeek,agendaDay",
      center: "",
      right: "title,today,prev,next"
    };
  })
});
