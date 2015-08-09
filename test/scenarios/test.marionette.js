var view = require("../../src/test.js")

module.exports = {
  tag: 'viewer-header',
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
