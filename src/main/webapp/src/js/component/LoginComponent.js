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

    onSubmit: function () {
        var checkObj = {
            userName : this.refs.userId.getText(),
            password: this.refs.password.getText()
        }

        console.log(checkObj);
    },


    render: function () {

        return (
            <div className = "container">

                <br/>

                <div className = "row">
                    <div  className = "col s12 offset-s3 grid-example">
                        <InputField icon = "perm_identity" ref = "userId"
                                    type = "text" label = "User ID" name = "userId"/>
                    </div>
                </div>

                <div className = "row">
                    <div  className = "col s12 offset-s3 grid-example">
                        <InputField icon = "vpn_key" type = "password"
                                    label = "Password" name = "password" ref = "password"/>
                    </div>

                </div>

                <div className = "row">
                    <div className = "col s12 offset-s4 grid-example">
                        <ReactRouter.Link activeClassName="selected"  to="register">
                            <Button name = "Sign Up" icon = "replay"/>
                        </ReactRouter.Link>
                        {"\u00a0"}
                            <Button name = "Submit" icon = "forward_10" onClick = {this.onSubmit}/>

                    </div>
                </div>



            </div>);
    }
});

module.exports = LoginComponent;