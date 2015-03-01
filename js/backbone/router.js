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
  routes: {
    ''      : 'handleRoute1',
    'view1' : 'handleRoute1',
    'view2' : 'handleRoute2',
    'view3' : 'handleRoute3',
    'view/view/:viewid(/:msg)' : 'handleRouteAll',
  },
  handleRoute1: function() {
    if (this.view1 == null) {
      this.view1 = new View1({model: this.greeting});
    }
    this.container.childView = this.view1;
    this.container.render();
  },
});