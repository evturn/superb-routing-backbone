var Router = Backbone.Router.extend({
  greeting: null,
  container: null,
  view1: null,
  view2: null,
  view3: null,
  initialize: function() {
    this.greeting = new GreetModel({ Message: 'I\'m a Model'});
    this.container = new ContainerView({el: $('#rAppContainer'), model: this.greeting});
  },
});