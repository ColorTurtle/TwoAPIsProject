var Item = Backbone.Model.extend({});

var ItemsCollection = Backbone.Collection.extend({
	model: Item,

	url: "https://openapi.etsy.com/v2/listings/active.js?\
	limt=250\
	&includes=Images\
	&api_key=6ytsbcyaiiafvg560dnhbd8k\
	&callback=?",

	parse: function(response) {
    return response.results;
  }
});