/**
 * Created by azibit on 10/8/15.
 */

var React = require('react');
var Reflux = require('reflux');
var RefluxStore = require('../store/RefluxStore');



var RefluxAction =  Reflux.createActions(['updateAge', 'doWriteUp', 'moveData', 'clickToSubmit']);

module.exports = RefluxAction;