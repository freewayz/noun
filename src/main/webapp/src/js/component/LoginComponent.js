/**
 * Created by azibit on 10/7/15.
 */

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
var TabComponent = require('./TabComponent');
var ReactRouter = require('react-router');

var religion = ["Christian", "Islam", "Other"];
var LoginComponent = React.createClass({

    mixin:[ReactRouter.State],

    render: function () {

        return (
            <div className = "container">

                <br/>

                <div className = "row">
                    <div  className = "col s12 offset-s3 grid-example">
                        <InputField icon = "perm_identity" type = "text" label = "User ID" name = "studentId"/>
                    </div>
                </div>

                <div className = "row">
                    <div  className = "col s12 offset-s3 grid-example">
                        <InputField icon = "vpn_key" type = "text" label = "Password" name = "password"/>
                    </div>

                </div>

                <div className = "row">
                    <div className = "col s12 offset-s4 grid-example">
                        <ReactRouter.Link activeClassName="selected"  to="register">
                            <Button name = "Sign Up" icon = "replay"/>
                        </ReactRouter.Link>
                        {"\u00a0"}
                        <ReactRouter.Link activeClassName="selected"  to="home">
                            <Button name = "Submit" icon = "forward_10"/>
                        </ReactRouter.Link>
                    </div>
                </div>



            </div>);
    }
});

module.exports = LoginComponent;