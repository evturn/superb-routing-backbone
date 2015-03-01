var View1 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + ' Sup, I\'m your first view.');
	},
});

var View2 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + ' I\'m your second');
	},
});