/**
 * Created by azibit on 10/9/15.
 */

var Router = require('react-router');

var ImageActions = require('./actions/imageactions');

setInterval(function() {
    ImageActions.fetchList();
}, 5000);

Router.start();