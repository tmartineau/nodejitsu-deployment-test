define(['backbone', 'js/models/Person'], function(Backbone, Person) {
	var People = Backbone.Collection.extend({
		model: Person,
		url: '/people'
	});

	return People;
});