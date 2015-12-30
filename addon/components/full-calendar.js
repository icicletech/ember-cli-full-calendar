import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['full-calendar'],

  // Event Data
  events                : null,

  // General Display
  headerLeft            : { left: 'title', center: '', right:  'today prev,next' },
  theme                 : false,
  firstDay              : 0,
  isRTL                 : false,
  weekends              : true,
  hiddenDays            : [],
  fixedWeekCount        : true,
  weekNumbers           : false,
  height                : 'auto',
  businessHours         : false,

  // Views
  defaultView           : 'month',

  // Agenda Options
  minTime               : '00:00:00',
  maxTime               : '24:00:00',
  scrollTime            : '06:00:00',
  slotEventOverlap      : true,

  // Event Dragging & Resizing
  editable              : false,
  eventStartEditable    : false,
  eventDurationEditable : false,
  dragRevertDuration    : 500,
  dragOpacity           : 0.75,
  dragScroll            : true,
  dragOverlap           : true,

  // Selecting
  selectable            : false,

  updateEvents: function() {
    var fullCalendarComponent = Ember.$(".full-calendar");
    fullCalendarComponent.fullCalendar('removeEvents');
    fullCalendarComponent.fullCalendar('addEventSource', this.get('events'));
    fullCalendarComponent.fullCalendar('rerenderEvents' );
  }.observes('events'),

  _initializeCalendar: function() {
    var _this = this;
    return Ember.$(".full-calendar").fullCalendar({

      // Event Data
      events: _this.get('events'),
      timeFormat: _this.get('timeFormat'),

      // General Display
      header: _this.get('header'),
      customButtons: _this.get('customButtons'),
      theme: _this.get('theme'),
      firstDay: _this.get('firstDay'),
      isRTL: _this.get('isRTL'),
      weekends: _this.get('weekends'),
      hiddenDays: _this.get('hiddenDays'),
      fixedWeekCount: _this.get('fixedWeekCount'),
      weekNumbers: _this.get('weekNumbers'),
      height: _this.get('height'),
      defaultView: _this.get('defaultView'),
      businessHours: _this.get('businessHours'),
      titleFormat: _this.get('titleFormat'),

      // Timezone
      timezone: _this.get('timezone'),

      // Agenda Option
      minTime: _this.get('minTime'),
      maxTime: _this.get('maxTime'),
      scrollTime: _this.get('scrollTime'),
      slotEventOverlap: _this.get('slotEventOverlap'),
      slotLabelFormat: _this.get('slotLabelFormat'),

      // Clicking & Hovering
      dayClick: function(date, jsEvent, view) {
        _this.sendAction('dayClick', date, jsEvent, view);
      },
      
      eventClick: function(calEvent, jsEvent, view) {
        _this.sendAction('eventClick', calEvent, jsEvent, view);
      },

      eventDragStart: function(event, jsEvent, ui, view) {
        _this.sendAction('eventDragStart', event, jsEvent, ui, view);
      },

      eventDragStop: function(event, jsEvent, ui, view) {
        _this.sendAction('eventDragStop', event, jsEvent, ui, view);
      },

      eventDrop: function(event, delta, revertFunc, jsEvent, ui, view) {
        _this.sendAction('eventDrop', event, delta, revertFunc, jsEvent, ui, view);
      },

      eventResize: function(event, delta, revertFunc, jsEvent, ui, view) {
        _this.sendAction('eventResize', event, delta, revertFunc, jsEvent, ui, view);
      },

      eventResizeStart: function(event, jsEvent, ui, view) {
        _this.sendAction('eventResizeStart', event, jsEvent, ui, view);
      },

      eventResizeStop: function(event, jsEvent, ui, view) {
        _this.sendAction('eventResizeStop', event, jsEvent, ui, view);
      },

      select: function(start, end, jsEvent, view) {
        _this.sendAction('select', start, end, jsEvent, view);
      },

      // Event Rendering
      eventRender: function(event, element, view) {
        _this.sendAction('eventRender', event, element, view);
      },

      eventAfterRender: function( event, element, view ) {
        _this.sendAction('eventAfterRender', event, element, view);
      },

      eventAfterAllRender: function (view) {
        _this.sendAction('eventAfterAllRender', view);
      },

      eventDestroy: function (event, element, view) {
        _this.sendAction('eventDestroy', event, element, view);
      },

      // Dragging & Resizing
      editable: _this.get('editable'),
      eventStartEditable: _this.get('eventStartEditable'),
      eventDurationEditable: _this.get('eventDurationEditable'),
      dragRevertDuration: _this.get('dragRevertDuration'),
      dragOpacity: _this.get('dragOpacity'),
      dragScroll: _this.get('dragScroll'),

      // Selecting
      selectable: _this.get('selectable')
    });
  }.on('didInsertElement')
});
