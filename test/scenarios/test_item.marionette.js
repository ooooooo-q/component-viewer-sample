var view = require("../../src/test.js").views.item;

module.exports = {
  tag: 'item',
  view: view,
  scenarios: {
    'default': {
      context: {
      	data:{
      		text: 'loading....'
      	}
      },
      description: 'default scenario'
    },
    'scenario 2': {
      context: {
      	data:{
      		text: '🍣'
      	}
      },
      description: 'another scenario'
    }
  }
};
