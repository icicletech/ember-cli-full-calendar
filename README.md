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
* [header](http://fullcalendar.io/docs/display/header/)
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
* [minTime](http://fullcalendar.io/docs/agenda/minTime/)
* [maxTime](http://fullcalendar.io/docs/agenda/maxTime/)
* [scrollTime](http://fullcalendar.io/docs/agenda/scrollTime/)
* [slotEventOverlap](http://fullcalendar.io/docs/agenda/slotEventOverlap/)
* [businessHours](http://fullcalendar.io/docs/display/businessHours/)

### Supported Callbacks

* [eventClick](http://fullcalendar.io/docs/mouse/eventClick/)
* [eventDragStart](http://fullcalendar.io/docs/event_ui/eventDragStart/)
* [eventDragStop](http://fullcalendar.io/docs/event_ui/eventDragStop/)
* [eventDrop](http://fullcalendar.io/docs/event_ui/eventDrop/)
* [eventResize](http://fullcalendar.io/docs/event_ui/eventResize/)
* [eventResizeStart](http://fullcalendar.io/docs/event_ui/eventResizeStart/)
* [eventResizeStop](http://fullcalendar.io/docs/event_ui/eventResizeStop/)
* [eventRender](http://fullcalendar.io/docs/event_rendering/eventRender/)
* [eventAfterRender](http://fullcalendar.io/docs/event_rendering/eventAfterRender/)
* [eventAfterAllRender](http://fullcalendar.io/docs/event_rendering/eventAfterAllRender/)
* [eventDestroy](http://fullcalendar.io/docs/event_rendering/eventDestroy/)
* [select](http://fullcalendar.io/docs/selection/select_callback/)

### Setting Up Callbacks
All supported callbacks can be captured using Ember actions.

Add the component to your template file.

```javascript
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

### License

Available under the MIT License.
