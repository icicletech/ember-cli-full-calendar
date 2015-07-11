import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['full-calendar'],

	// Event Data
  events					      : null,

  // General Display
  headerLeft            : 'title',
  headerCenter          : '',
  headerRight           : 'today prev,next',
  theme                 : false,
  firstDay              : 0,
  isRTL                 : false,
  weekends              : true,
  hiddenDays            : [],
  fixedWeekCount        : true,
  weekNumbers           : false,
  height                : 'auto',

  // Event Dragging & Resizing
  editable				      : false,
  eventStartEditable    : false,
  eventDurationEditable : false,
  dragRevertDuration    : 500,
  dragOpacity           : 0.75,
  dragScroll            : true,
  dragOverlap           : true,

  _initializeCalendar: function() {
  	var _this = this;
    return $(".full-calendar").fullCalendar({
    	// General Display
    	header: {
    		left: _this.get('headerLeft'),
    		center: _this.get('headerCenter'),
    		right: _this.get('headerRight'),
    	},

    	// Event Data
    	events: _this.get('events'),

    	// Clicking & Hovering
      eventClick: function(calEvent, jsEvent, view) {
      	_this.sendAction('eventClick', calEvent, jsEvent, view);
      },

      eventDragStart: function(event, jsEvent, ui, view) {
        _this.sendAction('eventDragStart', event, jsEvent, ui, view);
      },

      eventDragStop: function(event, jsEvent, ui, view) {
        _this.sendAction('eventDragStart', event, jsEvent, ui, view);
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

      // Dragging & Resizing
    	editable: _this.get('editable'),
      eventStartEditable: _this.get('eventStartEditable'),
      eventDurationEditable: _this.get('eventDurationEditable'),
      dragRevertDuration: _this.get('dragRevertDuration'),
      dragOpacity: _this.get('dragOpacity'),
      dragScroll: _this.get('dragScroll'),

      eventDrop: function(event, delta, revertFunc, jsEvent, ui, view) {
      	_this.sendAction('eventDrop', event, delta, revertFunc, jsEvent, ui, view);
      }
    });
  }.on('didInsertElement'),
});
