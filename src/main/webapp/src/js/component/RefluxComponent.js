/**
 * Created by azibit on 10/8/15.
 */

var React = require('react');
var Button = require('react-bootstrap').Button;
var Well = require('react-bootstrap').Well;
var ImageGrid = require('./ImageGrid');
var ImageActions = require('../action/RefluxAction');
var Reflux = require('reflux');
var RefluxStore = require('../store/RefluxStore');
var RegistrationComponent = require('./RegistrationComponent');
var TabComponent = require('../reuseable-ui/TabComponent');


var RefluxComponent = React.createClass({
    mixins: [Reflux.connect(RefluxStore, 'refluxStore')],

    getValue: function () {
        return React.findDOMNode(this.refs.myValue).value;
    },

    getInitialState: function () {
        ts: ""
    },


    submitValue: function () {

        var ss = this.getValue();
        ImageActions.clickToSubmit(ss);
    },


    render: function () {
        var p = RefluxStore.person;

        return (
            <div>
                <TabComponent/>
            </div>
        )
    }
});

var Res = React.createClass({
    render: function () {
        return (<RefluxComponent/>)
    }
});

module.exports = Res;