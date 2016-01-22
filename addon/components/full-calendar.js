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
  businessHours: false,

  // Text/Time Customization
  lang: 'en',

  // Views
  defaultView: 'month',

  // Agenda Options
  minTime: '00:00:00',
  maxTime: '24:00:00',
  scrollTime: '06:00:00',
  slotEventOverlap: true,

  // Current Date
  defaultDate: null,

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

  updateEvents: observer('events', function() {
    var fullCalendarElement = this.$();
    fullCalendarElement.fullCalendar('removeEvents');
    fullCalendarElement.fullCalendar('addEventSource', this.get('events'));
    fullCalendarElement.fullCalendar('rerenderEvents' );
  }),

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
      defaultView: this.get('defaultView'),
      businessHours: this.get('businessHours'),
      titleFormat: this.get('titleFormat'),

      viewRender: (view, element) => {
        this.sendAction('viewRender', view, element);
      },

      // Timezone
      timezone: this.get('timezone'),

      // Agenda Option
      minTime: this.get('minTime'),
      maxTime: this.get('maxTime'),
      scrollTime: this.get('scrollTime'),
      slotEventOverlap: this.get('slotEventOverlap'),
      slotLabelFormat: this.get('slotLabelFormat'),

      // Current Date
      defaultDate: this.get('defaultDate'),

      // Text/Time Customization
      lang: this.get('lang'),

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

      eventMouseover: function (event, jsEvent, view) {
        _this.sendAction('eventMouseover', event, jsEvent, view);
      },

      eventMouseout: function (event, jsEvent, view) {
        _this.sendAction('eventMouseout', event, jsEvent, view);
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
  }
});
