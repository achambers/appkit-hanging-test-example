var App;

module('Acceptances - Timeout', {
  setup: function(){
    fakehr.start();
    App = startApp();
  },
  teardown: function() {
    fakehr.reset();
    Ember.run(App, 'destroy');
  }
});

test('test times out', function(){
  expect(1);

  visit('/timeouts')
  .httpRespond('get', 'http://somehost.com/timeouts', {timeouts: []})
  .then(function(){
    var title = find('h3');

    equal(title.text(), 'This times out');
  });
});

