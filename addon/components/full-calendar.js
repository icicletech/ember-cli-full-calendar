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

      // Dragging & Resizing
    	editable: _this.get('editable'),
      eventDrop: function(event, delta, revertFunc, jsEvent, ui, view) {
      	_this.sendAction('eventDrop', event, delta, revertFunc, jsEvent, ui, view);
      }
    });
  }.on('didInsertElement'),
});
