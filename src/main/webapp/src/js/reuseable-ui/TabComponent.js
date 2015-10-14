/**
 * Created by peter on 8/29/15.
 */

var React = require('react');
var Tabs = require('./Tabs');
var Tab = require('./Tab');
var LoginComponent = require('../component/LoginComponent');
var RegistrationComponent = require('../component/RegistrationComponent');


var TabComponent = React.createClass({

    getInitialState: function () {
        return {
            eventBody: ""
        }
    },
    render: function () {
        return (
            <div className="row">
                <Tabs>
                    <Tab tabName = "BMAS_Resources">
                        <LoginComponent/>
                    </Tab>
                    <Tab tabName = "Lecturer_Resources">
                        <RegistrationComponent/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
});

module.exports = TabComponent;