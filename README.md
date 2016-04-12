# Ember CLI Full Calendar
[![Build Status](https://travis-ci.org/icicletech/ember-cli-full-calendar.svg)](https://travis-ci.org/icicletech/ember-cli-full-calendar) [![Code Climate](https://codeclimate.com/github/icicletech/ember-cli-full-calendar/badges/gpa.svg)](https://codeclimate.com/github/icicletech/ember-cli-full-calendar)

This is a Ember wrapper for [jQuery FullCalendar](http://fullcalendar.io/) plugin.

Some of the common properties, methods have been hooked up. The rest will be added as required.

## Installation

First, install the npm package:

```npm install --save-dev ember-cli-full-calendar```

Next, setup the component:

```ember g full-calendar```

## Usage

Use the `full-calendar` component -

```{{full-calendar events=events}}```

### Supported Options

* [events](http://fullcalendar.io/docs/event_data/Event_Object/)([array](http://fullcalendar.io/docs/event_data/events_array/), [JSON](http://fullcalendar.io/docs/event_data/events_json_feed/), or [function](http://fullcalendar.io/docs/event_data/events_function/))
* [eventSources](http://fullcalendar.io/docs/event_data/eventSources/)
* [header](http://fullcalendar.io/docs/display/header/)
* [customButtons](http://fullcalendar.io/docs/display/customButtons/)
* [theme](http://fullcalendar.io/docs/display/theme/)
* [firstDay](http://fullcalendar.io/docs/display/firstDay/)
* [isRTL](http://fullcalendar.io/docs/display/isRTL/)
* [weekends](http://fullcalendar.io/docs/display/weekends/)
* [hiddenDays](http://fullcalendar.io/docs/display/hiddenDays/)
* [fixedWeekCount](http://fullcalendar.io/docs/display/fixedWeekCount/)
* [weekNumbers](http://fullcalendar.io/docs/display/weekNumbers/)
* [height](http://fullcalendar.io/docs/display/height/)
* [editable](http://fullcalendar.io/docs/event_ui/editable/)
* [selectable](http://fullcalendar.io/docs/selection/selectable/)
* [dragRevertDuration](http://fullcalendar.io/docs/event_ui/dragRevertDuration/)
* [dragOpacity](http://fullcalendar.io/docs/event_ui/dragOpacity/)
* [dragScroll](http://fullcalendar.io/docs/event_ui/dragScroll/)
* [eventStartEditable](http://fullcalendar.io/docs/event_ui/eventStartEditable/)
* [eventDurationEditable](http://fullcalendar.io/docs/event_ui/eventDurationEditable/)
* [defaultView](http://fullcalendar.io/docs/views/defaultView/)
* [businessHours](http://fullcalendar.io/docs/display/businessHours/)
* [titleFormat](http://fullcalendar.io/docs/text/titleFormat/)
* [lang](http://fullcalendar.io/docs/text/lang/)
* [timeFormat](http://fullcalendar.io/docs/text/timeFormat/)

### Sending Actions to calendar

For the actions to work we need to register a property that will allow us to access FullCalendar element from our controller.


```
// app/templates/application.hbs
{{full-calendar
events=events
defaultView="agendaWeek"
allDaySlot=false
register-as="accessToFullCalendar"
nowIndicator=true}}
```

Sending actions from controller to FullCalendar:

```
// app/controllers/application.js
export default Ember.Controller.extend({
  
  accessToFullCalendar: null,
  
  actions: {
    prev: function() {
      this.get('accessToFullCalendar').send('prev');
    }
  }
});
```

### Timezone
* [timezone](http://fullcalendar.io/docs/timezone/timezone/)
* [now](http://fullcalendar.io/docs/timezone/now/)

### Agenda Options

* [allDaySlot](http://fullcalendar.io/docs/agenda/allDaySlot/)
* [allDayText](http://fullcalendar.io/docs/agenda/allDayText/)
* [maxTime](http://fullcalendar.io/docs/agenda/maxTime/)
* [minTime](http://fullcalendar.io/docs/agenda/minTime/)
* [scrollTime](http://fullcalendar.io/docs/agenda/scrollTime/)
* [slotEventOverlap](http://fullcalendar.io/docs/agenda/slotEventOverlap/)
* [slotLabelFormat](http://fullcalendar.io/docs/timeline/slotLabelFormat/)
* [slotLabelInterval](http://fullcalendar.io/docs/agenda/slotLabelInterval/)
* [snapDuration](http://fullcalendar.io/docs/agenda/snapDuration/)

### Current Date

* [defaultDate](http://fullcalendar.io/docs/current_date/defaultDate/)

### Current Date Actions

* [prev](http://fullcalendar.io/docs/current_date/prev/)  
  `this.get('accessToFullCalendar').send('prev')`

* [next](http://fullcalendar.io/docs/current_date/next/)  
  `this.get('accessToFullCalendar').send('next')`

* [prevYear](http://fullcalendar.io/docs/current_date/prevYear/)  
  `this.get('accessToFullCalendar').send('prevYear')`

* [nextYear](http://fullcalendar.io/docs/current_date/nextYear/)  
  `this.get('accessToFullCalendar').send('nextYear')`

* [gotoDate](http://fullcalendar.io/docs/current_date/gotoDate/)  
  `this.get('accessToFullCalendar').send('gotoDate', new Date(2014, 1, 1))`

* [incrementDate](http://fullcalendar.io/docs/current_date/incrementDate/)  
  `this.get('accessToFullCalendar').send('incrementDate', {months:1})`

Please check dummy app in tests for usage example.

### Event Rendering

* [eventColor](http://fullcalendar.io/docs/event_rendering/Colors/)
* [eventBackgroundColor](http://fullcalendar.io/docs/event_rendering/eventBackgroundColor/)
* [eventBorderColor](http://fullcalendar.io/docs/event_rendering/eventBorderColor/)
* [eventTextColor](http://fullcalendar.io/docs/event_rendering/eventTextColor/)
* [nextDayThreshold](http://fullcalendar.io/docs/event_rendering/nextDayThreshold/)
* [eventOrder](http://fullcalendar.io/docs/event_rendering/eventOrder/)
* [eventRender (callback)](http://fullcalendar.io/docs/event_rendering/eventRender/)
* [eventAfterRender (callback)](http://fullcalendar.io/docs/event_rendering/eventAfterRender/)
* [eventAfterAllRender (callback)](http://fullcalendar.io/docs/event_rendering/eventAfterAllRender/)
* [eventDestroy (callback)](http://fullcalendar.io/docs/event_rendering/eventDestroy/)

### Event Rendering Actions

* [renderEvent (method)](http://fullcalendar.io/docs/event_rendering/renderEvent/)  
  `this.get('accessToFullCalendar').send('renderEvent', {title: "New Event", start: new Date(2014, 1, 1)})`

* [rerenderEvents (method)](http://fullcalendar.io/docs/event_rendering/rerenderEvents/)  
  `this.get('accessToFullCalendar').send('rerenderEvents')`

### Supported Callbacks

* [eventClick](http://fullcalendar.io/docs/mouse/eventClick/)
* [eventDragStart](http://fullcalendar.io/docs/event_ui/eventDragStart/)
* [eventDragStop](http://fullcalendar.io/docs/event_ui/eventDragStop/)
* [eventDrop](http://fullcalendar.io/docs/event_ui/eventDrop/)
* [eventResize](http://fullcalendar.io/docs/event_ui/eventResize/)
* [eventResizeStart](http://fullcalendar.io/docs/event_ui/eventResizeStart/)
* [eventResizeStop](http://fullcalendar.io/docs/event_ui/eventResizeStop/)
* [eventMouseover](http://fullcalendar.io/docs/mouse/eventMouseover/)
* [eventMouseout](http://fullcalendar.io/docs/mouse/eventMouseout/)
* [select](http://fullcalendar.io/docs/selection/select_callback/)
* [dayClick](http://fullcalendar.io/docs/mouse/dayClick/)
* [viewRender](http://fullcalendar.io/docs/display/viewRender/)

### Setting Up Callbacks
All supported callbacks can be captured using Ember actions.

Add the component to your template file.

```hbs
// app/templates/application.hbs
{{full-calendar events=model.events eventClick=(action "clicked") }}
```

Create the events.

```javascript
// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return {
			events: Ember.A([{
				title: "Hackathon", start: Date.now()
			}])
		};
	}
});
```

Register for the action in your controller.

```javascript
// app/controllers/application.js
import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		clicked(event, jsEvent, view){
			console.log(`${event.title} was clicked!`)
			// Prints: Hackathon was clicked!
		}
	}
});
```

### I18n

Include the language file.

```javascript
// ember-cli-build.js
module.exports = function(defaults) {
  var app = ...

  // Include fullcalendar language file
  // Full list of available languages: https://github.com/fullcalendar/fullcalendar/tree/master/dist/lang
  app.import('bower_components/fullcalendar/dist/lang/es.js');
};
```

Set fullcalendar language

```hbs
// app/templates/application.hbs
{{full-calendar events=model.events lang="es"}}
```

### License

Available under the MIT License.

## About Icicle Technologies

![Icicle Technologies](https://cdn2.icicletech.com/assets/icicle-698e4eaeca5518499068468bc3ba5680.png)

Ember CLI Full Calendar is maintained and funded by Icicle technologies.
The names and logos for Icicle technologies are trademarks of Icicle technologies.

We love open source software!
See [our other projects][community] or
[hire us][hire] to design, develop, and grow your product.

[community]: https://github.com/icicletech
[hire]: https://www.icicletech.com/services
