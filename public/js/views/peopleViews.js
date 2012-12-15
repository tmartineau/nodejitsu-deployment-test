define(['backbone', 'underscore'], function(Backbone, _) {
	var peopleViews = {};

	peopleViews.PersonView = Backbone.View.extend({
		tagName: 'li',
		className: 'person',

		render: function() {
			this.el.innerHTML = this.model.get('name');

			return this;
		}
	});

	peopleViews.PeopleView = Backbone.View.extend({
		tagName: 'ul',

		initialize: function() {
			_.bindAll(this, ['renderOne']);

			this.collection.on('add', this.renderOne);
		},
		render: function() {
			this.collection.each(function(person) {
				this.renderOne(person);
			}, this);

			return this;
		},
		renderOne: function(person) {
			this.el.appendChild(new peopleViews.PersonView({model: person}).render().el);
		}
	});

	return peopleViews;
});