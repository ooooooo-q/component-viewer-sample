var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var _ = require('underscore')

var Model = Backbone.Model.extend({
	defaults:{
		text: "..."
	}
})

module.exports = Marionette.ItemView.extend({
	template: function(serialized_model){ 
		return _.template("<div><%- text %></div>")(serialized_model);
	},
	initialize:function(options){
		this.model = new Model(options.data);
	}
});