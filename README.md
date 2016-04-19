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

### Sending actions

To send actions to the calendar, register it with the controller.

```handlebars
// app/templates/application.hbs
{{
  full-calendar
  events=events
  register-as="accessToFullCalendar"
}}
```

```javascript
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

### Setting Up callbacks

```handlebars
// app/templates/application.hbs
{{
  full-calendar 
  events=events 
  eventClick=(action "clicked") 
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
    clicked(event, jsEvent, view){
      console.log(`${event.title} was clicked!`)
      // Prints: Hackathon was clicked!
    }
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
