[ci-img]: https://img.shields.io/travis/icicletech/ember-cli-full-calendar.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/icicletech/ember-cli-full-calendar

# ember-cli-full-calendar <br /> [![Travis][ci-img]][ci-url]

Ember wrapper for [jQuery FullCalendar](http://fullcalendar.io/) plugin.

### Installation

```
npm install --save-dev ember-cli-full-calendar
ember g full-calendar
```

### Usage

```handlebars
{{
  full-calendar 
  events=events
}}
```

### Dynamic updates

To dynamically change calendars option please use the updateOptions attribute.
This attribute is an array of options that needs to be changed.

```javascript
[
  {optionName: 'someOption', value: 'someValue'},
  {optionName: 'someAnotherOption', value: 'someAnotherValue'}
]
```

When the attribute will change from null to something it will run a function inside the component to update Full Calendar and then set back the updateOptions to null.

For example:

```handlebars
// app/templates/application.hbs
{{
  full-calendar
  events=events
  updateOptions=optionsToUpdate
}}
```

```javascript
// app/controllers/application.js
this.set('optionsToUpdate', [{optionName: "height", value: 800}]);
```

After setting optionsToUpdate as above it will send to Full Calendar:

```javascript
component.$().fullCalendar('option', 'height', 800);
```

Any option allowed for Full Calendar dynamic change can be set this way.

The previous way was to use register-as attribute to be able to access the component in the controller, but this has been deprecated as it will not work in the newer versions of ember.js.

### Callbacks

```handlebars
// app/templates/application.hbs
{{
  full-calendar 
  events=events 
  eventClick=(action "eventClick") 
  dayClick=(action "dayClick") 
  eventDragStart=(action "eventDragStart") 
  eventDragStop=(action "eventDragStop") 
  eventDrop=(action "eventDrop") 
  eventResize=(action "eventResize") 
  eventResizeStart=(action "eventResizeStart") 
  eventResizeStop=(action "eventResizeStop") 
  select=(action "select") 
  eventMouseover=(action "eventMouseover") 
  eventMouseout=(action "eventMouseout") 
  eventRender=(action "eventRender") 
  eventAfterRender=(action "eventAfterRender") 
  eventAfterAllRender=(action "eventAfterAllRender") 
  eventDestroy=(action "eventDestroy") 
  dayRender=(action "dayRender") 
}}
```

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

```javascript
// app/controllers/application.js
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    eventClick(event, jsEvent, view){
      console.log(`${event.title} was clicked!`)
      // Prints: Hackathon was clicked!
    },
    //other callbacks omitted
  }
});
```

### I18n

```javascript
// ember-cli-build.js
module.exports = function(defaults) {
  var app = ...

  // Complete list of lanugages: 
  // https://github.com/fullcalendar/fullcalendar/tree/master/dist/lang
  app.import('bower_components/fullcalendar/dist/lang/es.js');
};
```

```handlebars
// app/templates/application.hbs
{{
  full-calendar 
  events=events 
  lang="es"
}}
```

### License
Available under the MIT License.

### Credits
[![Icicle Technologies](https://cdn2.icicletech.com/assets/icicle-698e4eaeca5518499068468bc3ba5680.png)](https://www.icicletech.com)
