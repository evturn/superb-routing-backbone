var ContainerView = Backbone.View.extend({
	childView: null,
	render: function() {
		this.$el.html('View Zone');

		this.$el.append(this.childView.$el);
		return this;
	},
});