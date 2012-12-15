define(['jquery', 'backbone','js/views/peopleViews', 'js/collections/People'], function($, Backbone, peopleViews, People) {
	var App = Backbone.View.extend({
		el: '#main',

		events: {
			'submit #add-name': 'addName'
		},

		initialize: function() {
			this.people = new People([
				{name: 'Sarah'},
				{name: 'Spike'},
				{name: 'Thomas'},
				{name: 'Cid'}
			]);
			this.peopleView = new peopleViews.PeopleView({collection: this.people});

			this.render();
		},
		render: function() {
			this.el.appendChild(this.peopleView.render().el);
		},

		addName: function(e) {
			var name = $('#name').val();

			e.preventDefault();
			this.people.create({name: name});
		}
	});

	return App;
});