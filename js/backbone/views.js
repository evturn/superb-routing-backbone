
var View1 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + ' I\'m your first view.');
		return this;
	},
});

var View2 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + ' I\'m #2.');
		return this;
	},
});

var View3 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + ' I\m view three.');
		return this;
	},
});

var ContainerView = Backbone.View.extend({
	childView: null,
	render: function() {
		this.$el.html('<h2>View Zone</h2>');

		this.$el.append(this.childView.$el);
		return this;
	},
});