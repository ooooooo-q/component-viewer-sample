var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var _ = require('underscore');

var Model = Backbone.Model.extend({
	defaults:{
		text: "..."
	}
});


var Collection = Backbone.Collection.extend({
	model: Model
});


var LayoutView = Marionette.LayoutView.extend({
	regions:{		
		listRegion:'.list_region'
	}
});


var ItemView = Marionette.ItemView.extend({
	template: function(serialized_model){ 
		return _.template("<div><%- text %></div>")(serialized_model);
	},
	initialize:function(options){
		if (options.data){
			this.model = new Model(options.data);
		}
	}
});


var CollectionView = Marionette.CollectionView.extend({
	childView: ItemView,
	initialize:function(options){
		if(options.data){
			this.collection = new Collection(options.data);			
		}
	}
});


module.exports = {
	views:{
		layout: LayoutView,
		collection: CollectionView,
		item: ItemView
	}
};