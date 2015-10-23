var  Reflux = require('reflux');

var Actions =  Reflux.createActions({
  login: {children: ['completed', 'failed']},
  logout: {},
  editDataArray: {}
});

Actions.login.listen(function (email, password) {
  setTimeout(function() {
    var auths = require('../store/AuthStore.sampleData.json');
    auths[`${email}:${password}`];
  }, 3000).then(this.completed).catch(this.failed);
});
module.export = Actions;

