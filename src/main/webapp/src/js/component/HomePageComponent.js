/**
 * Created by azibit on 9/11/15.
 */

var React = require('react');
var InputField = require('./InputFieldComponent');
var DropDown = require('./DropDownComponent');
var TextArea = require('./TextArea');
var SwitchButton = require('./SwitchButton');
var FileUpload = require('./FileUpload');
var TestPhoto = require('./TestPhoto');
var Button = require('./ButtonComponent');
var ReactRouter = require('react-router');

var religion = ["Christian", "Islam", "Other"];
var HomePage = React.createClass({

    render: function () {
        return (
            <div className = "row">
                <div className="section">
                    <div className="col s12">
                        <div className="slider">
                            <ul className="slides">
                                <li>
                                    <img src="http://lorempixel.com/580/250/nature/1"/>

                                    <div className="caption center-align">
                                        <h3>This is our big Tagline!</h3>
                                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                <li>
                                    <img src="http://lorempixel.com/580/250/nature/2"/>

                                    <div className="caption left-align">
                                        <h3>Left Aligned Caption</h3>
                                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                <li>
                                    <img src="http://lorempixel.com/580/250/nature/3"/>

                                    <div className="caption right-align">
                                        <h3>Right Aligned Caption</h3>
                                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                <li>
                                    <img src="http://lorempixel.com/580/250/nature/4"/>

                                    <div className="caption center-align">
                                        <h3>This is our big Tagline!</h3>
                                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});


module.exports = HomePage;