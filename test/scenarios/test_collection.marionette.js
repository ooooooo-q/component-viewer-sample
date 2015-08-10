var view = require("../../src/test.js").views.collection;

module.exports = {
  tag: 'collection',
  view: view,
  scenarios: {
    'default': {
      context: {
      	data:[
          {text: "1st"},
          {text: "2nd"}
        ]
      },
      description: 'default scenario'
    }
  }
};
