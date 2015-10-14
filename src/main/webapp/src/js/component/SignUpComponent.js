/**
 * Created by azibit on 10/8/15.
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
var religion = ["Christian", "Islam", "Other"];

var SignUpComponent = React.createClass({
    render: function () {
        return (
            <div>
                <div className = "container">

                    <br/>
                    <div className = "row">
                        <div  className = "col s12 offset-s3 grid-example">
                            <InputField icon = "account_circle" type = "text" label = "Name" name = "firstName"/>
                        </div>
                    </div>

                    <div className = "row">
                        <div  className = "col s12 offset-s3 grid-example">
                            <InputField icon = "loyalty" type = "text" label = "Course Name" name = "lastName"/>
                        </div>
                    </div>

                    <div className = "row">
                        <div  className = "col s12 offset-s3 grid-example">
                            <InputField icon = "loyalty" type = "text" label = "Date" name = "lastName"/>
                        </div>
                    </div>

                    <div className = "row">
                        <div  className = "col s12 offset-s3 grid-example">
                            <DropDown optionsList = {religion}>Faculty</DropDown>
                        </div>
                    </div>

                    <div className = "row">
                        <div  className = "col s12 offset-s3 grid-example">
                            <DropDown optionsList = {religion}>Department</DropDown>
                        </div>

                    </div>



                </div>
            </div>
        )
    }
});

module.exports = SignUpComponent;