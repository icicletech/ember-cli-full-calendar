import Ember from 'ember';
const { observer, Component } = Ember;

export default Component.extend({
  tagName: 'div',
  classNames: ['full-calendar'],

  // Event Data
  events: null,

  // General Display
  headerLeft: { left: 'title', center: '', right:  'today prev,next' },
  theme: false,
  firstDay: 0,
  isRTL: false,
  weekends: true,
  hiddenDays: [],
  fixedWeekCount: true,
  weekNumbers: false,
  height: 'auto',
  eventLimit: false,
  businessHours: false,

  // Text/Time Customization
  lang: 'en',
  displayEventEnd: {
    month: false,
    basicView: false,
    agendaWeek: true,
    agendaDay: true,
    basicDay: true
  },

  // Timezone
  timezone: false,

  // Views
  defaultView: 'month',

  // Agenda Options
  allDaySlot: true,
  allDayText: 'all-day',
  maxTime: '24:00:00',
  minTime: '00:00:00',
  scrollTime: '06:00:00',
  slotDuration: '00:30:00',
  slotEventOverlap: true,
  slotLabelFormat: 'h(:mm)a',
  slotLabelInterval: '00:30:00',
  snapDuration: '00:30:00',

  // Current Date
  defaultDate: null,
  nowIndicator: false,

  // Event Rendering
  eventColor: null,
  eventBackgroundColor: null,
  eventBorderColor: null,
  eventTextColor: null,
  nextDayThreshold: "09:00:00",
  eventOrder: "title",

  // Event Dragging & Resizing
  editable: false,
  eventStartEditable: false,
  eventDurationEditable: false,
  dragRevertDuration: 500,
  dragOpacity: 0.75,
  dragScroll: true,
  dragOverlap: true,

  // Selecting
  selectable: false,

  updateEvents: observer('events.[]', function() {
    var fullCalendarElement = this.$();
    fullCalendarElement.fullCalendar('removeEvents');
    fullCalendarElement.fullCalendar('addEventSource', this.get('events'));
    fullCalendarElement.fullCalendar('rerenderEvents' );
  }),

  /**
   * Register this component to parent controller. We need this to be able to send actions from outside.
   */
  didReceiveAttrs: function() {
    this.set('targetObject.' + this.get('register-as'), this);
  },

  didInsertElement() {
    this._super(...arguments);
    this.$().fullCalendar({

      // Event Data
      events: this.get('events'),
      eventSources: this.get('eventSources'),
      timeFormat: this.get('timeFormat'),

      // General Display
      header: this.get('header'),
      customButtons: this.get('customButtons'),
      theme: this.get('theme'),
      firstDay: this.get('firstDay'),
      isRTL: this.get('isRTL'),
      weekends: this.get('weekends'),
      hiddenDays: this.get('hiddenDays'),
      fixedWeekCount: this.get('fixedWeekCount'),
      weekNumbers: this.get('weekNumbers'),
      height: this.get('height'),
      eventLimit: this.get('eventLimit'),
      defaultView: this.get('defaultView'),
      businessHours: this.get('businessHours'),
      titleFormat: this.get('titleFormat'),
      columnFormat: this.get('columnFormat'),

      viewRender: (view, element) => {
        this.sendAction('viewRender', view, element);
      },

      // Timezone
      timezone: this.get('timezone'),
      now: this.get('now'),

      // Agenda Option
      allDaySlot: this.get('allDaySlot'),
      allDayText: this.get('allDayText'),
      maxTime: this.get('maxTime'),
      minTime: this.get('minTime'),
      scrollTime: this.get('scrollTime'),
      slotDuration: this.get('slotDuration'),
      slotEventOverlap: this.get('slotEventOverlap'),
      slotLabelFormat: this.get('slotLabelFormat'),
      slotLabelInterval: this.get('slotLabelInterval'),
      snapDuration: this.get('snapDuration'),

      // Current Date
      defaultDate: this.get('defaultDate'),

      // nowIndicator
      nowIndicator: this.get('nowIndicator'),

      // Event Rendering
      eventColor: this.get('eventColor'),
      eventBackgroundColor: this.get('eventBackgroundColor'),
      eventBorderColor: this.get('eventBorderColor'),
      eventTextColor: this.get('eventTextColor'),
      nextDayThreshold: this.get('nextDayThreshold'),
      eventOrder: this.get('eventOrder'),

      // Text/Time Customization
      lang: this.get('lang'),
      displayEventEnd: this.get('displayEventEnd'),

      // Clicking & Hovering
      dayClick: (date, jsEvent, view) => {
        this.sendAction('dayClick', date, jsEvent, view);
      },

      eventClick: (calEvent, jsEvent, view) => {
        this.sendAction('eventClick', calEvent, jsEvent, view);
      },

      eventDragStart: (event, jsEvent, ui, view) => {
        this.sendAction('eventDragStart', event, jsEvent, ui, view);
      },

      eventDragStop: (event, jsEvent, ui, view) => {
        this.sendAction('eventDragStop', event, jsEvent, ui, view);
      },

      eventDrop: (event, delta, revertFunc, jsEvent, ui, view) => {
        this.sendAction('eventDrop', event, delta, revertFunc, jsEvent, ui, view);
      },

      eventResize: (event, delta, revertFunc, jsEvent, ui, view) => {
        this.sendAction('eventResize', event, delta, revertFunc, jsEvent, ui, view);
      },

      eventResizeStart: (event, jsEvent, ui, view) => {
        this.sendAction('eventResizeStart', event, jsEvent, ui, view);
      },

      eventResizeStop: (event, jsEvent, ui, view) => {
        this.sendAction('eventResizeStop', event, jsEvent, ui, view);
      },

      select: (start, end, jsEvent, view) => {
        this.sendAction('select', start, end, jsEvent, view);
      },

      eventMouseover: (event, jsEvent, view) => {
        this.sendAction('eventMouseover', event, jsEvent, view);
      },

      eventMouseout: (event, jsEvent, view) => {
        this.sendAction('eventMouseout', event, jsEvent, view);
      },

      // Event Rendering
      eventRender: (event, element, view) => {
        this.sendAction('eventRender', event, element, view);
      },

      eventAfterRender: (event, element, view ) => {
        this.sendAction('eventAfterRender', event, element, view);
      },

      eventAfterAllRender: (view) => {
        this.sendAction('eventAfterAllRender', view);
      },

      eventDestroy: (event, element, view) => {
        this.sendAction('eventDestroy', event, element, view);
      },

      // Day Rendering
      dayRender: (date, element, view) => {
        this.sendAction('dayRender', date, element);
      },

      // Dragging & Resizing
      editable: this.get('editable'),
      eventStartEditable: this.get('eventStartEditable'),
      eventDurationEditable: this.get('eventDurationEditable'),
      dragRevertDuration: this.get('dragRevertDuration'),
      dragOpacity: this.get('dragOpacity'),
      dragScroll: this.get('dragScroll'),

      // Selecting
      selectable: this.get('selectable')
    });
  },

  // Actions sent from outsite to full calendar
  actions: {

    // Curent date
    prev: function() {
      this.$().fullCalendar('prev');
    },

    next: function() {
      this.$().fullCalendar('next');
    },

    prevYear: function() {
      this.$().fullCalendar('prevYear');
    },

    nextYear: function() {
      this.$().fullCalendar('nextYear');
    },

    today: function() {
      this.$().fullCalendar('today');
    },

    gotoDate: function(date) {
      this.$().fullCalendar('gotoDate', date);
    },

    incrementDate: function(duration) {
      this.$().fullCalendar('incrementDate', duration);
    },

    // Event Rendering
    renderEvent: function(event, stick) {
      this.$().fullCalendar('renderEvent', event, stick);
    },

    rerenderEvents: function() {
      this.$().fullCalendar('rerenderEvents');
    },

    refetchEvents: function() {
      this.$().fullCalendar('refetchEvents');
    },

    //Rerendering view
    changeView: function(viewName) {
      this.$().fullCalendar('changeView', viewName);
    }
  }
});
