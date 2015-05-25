# Ember CLI Full Calendar

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

* events
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

### Contributors

* [Shrivara K S](https://github.com/shrivaraks)

### License

Available under the MIT License.
