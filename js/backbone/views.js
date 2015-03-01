
var View1 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('message') + ' Sup, I\'m your first view.');
		return this;
	},
});

var View2 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('message') + ' I\'m your second');
		return this;
	},
});

var View3 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('message') + ' I AM VIEW THREE');
		return this;
	},
});

var ContainerView = Backbone.View.extend({
	template: _.template($('#container-template').html()),
	childView: null,
	render: function() {
		this.$el.html('View Zone');

		this.$el.append(this.childView.$el);
		return this;
	},
});