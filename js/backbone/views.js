var View1 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + ' <h4>I\'m your first view.</h4>');
		return this;
	},
});

var View2 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + ' <h4>I\'m your second view.</h4>');
		return this;
	},
});

var View3 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + ' <h4>I\'m your third view.</h4>');
		return this;
	},
});

var ContainerView = Backbone.View.extend({
	childView: null,
	render: function() {
		this.$el.html('<h1 class="page-header">Superb Routing</h1>');

		this.$el.append(this.childView.$el);
		return this;
	},
});