# Ember CLI Full Calendar
[![Build Status](https://travis-ci.org/icicletech/ember-cli-full-calendar.svg)](https://travis-ci.org/icicletech/ember-cli-full-calendar) [![Code Climate](https://codeclimate.com/github/icicletech/ember-cli-full-calendar/badges/gpa.svg)](https://codeclimate.com/github/icicletech/ember-cli-full-calendar)

This is a *WIP* Ember wrapper for [jQuery FullCalendar](http://fullcalendar.io/) plugin.

## Installation

First, install the npm package:

```npm install --save-dev ember-cli-full-calendar```

Next, setup the component:

```ember g full-calendar```

## Usage

Use the `full-calendar` component -

```{{full-calendar events=events}}```

The supported events formats are [array](http://fullcalendar.io/docs/event_data/events_array/), [JSON](http://fullcalendar.io/docs/event_data/events_json_feed/), and [function](http://fullcalendar.io/docs/event_data/events_function/).

### Supported Options

* [events](http://fullcalendar.io/docs/event_data/Event_Object/)([array](http://fullcalendar.io/docs/event_data/events_array/), [JSON](http://fullcalendar.io/docs/event_data/events_json_feed/), or [function](http://fullcalendar.io/docs/event_data/events_function/))
* [headerLeft](http://fullcalendar.io/docs/display/header/)
* [headerCenter](http://fullcalendar.io/docs/display/header/)
* [headerRight](http://fullcalendar.io/docs/display/header/)
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

### Contributors

* [Shrivara K S](https://github.com/shrivaraks)
* [Ryan Waudby](https://github.com/ryanwaudby)

### License

Available under the MIT License.
