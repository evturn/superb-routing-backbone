var greeting = new GreetModel({Message: "Your View"});

var container = new ContainerView({el: $('#AppContainer'), mode: greeting});

var view1 = null;
var view2 = null;
var view3 = null;

function showView1() {
	if (view1 == null) {
		view1 = new View1({model: greeting});
	}
	container.childView = view1;
	container.render();
}

function showVie2() {
	if (view2 == null) {
		view2 = new View1({model: greeting});
	}
	container.childView = view2;
	container.render();
}