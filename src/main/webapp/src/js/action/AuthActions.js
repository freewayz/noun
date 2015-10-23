var  Reflux = require('reflux');

module.export =  Reflux.createActions({
  login: {children: ['completed', 'failed']},
  logout: {}
});


