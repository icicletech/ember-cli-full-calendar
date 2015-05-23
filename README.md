# Ember CLI Full Calendar

This is a *WIP* Ember wrapper for jQuery FullCalendar plugin.

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
* headerLeft
* headerCenter
* headerRight
* theme
* firstDay
* isRTL
* weekends
* hiddenDays
* fixedWeekCount
* weekNumbers
* height
* editable

### Contributors

* [Shrivara K S](https://github.com/shrivaraks)

### License

Available under the MIT License.