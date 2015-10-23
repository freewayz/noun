/**
 *
 * Created by azibit on 10/7/15.
 */



var React = require('react');
var InputField = require('./InputFieldComponent');
var DropDown = require('./DropDownComponent');
var TextArea = require('./TextArea');
var SwitchButton = require('./SwitchButton');
var FileUpload = require('./FileUpload');
var TestPhoto = require('./TestPhoto');
var Button = require('./ButtonComponent');
var religion = ["Christian", "Islam", "Other"];
var ReactRouter = require('react-router');
var Reflux = require('reflux');
var ApplicationStore = require('../store/ApplicationStore');
var ApplicationAction = require('../action/ApplicationAction');

var RegistrationComponent = React.createClass({

    getInitialState: function () {
        return {
            isRegistered: false
        }
    },
    mixins: [Reflux.ListenerMixin],

    onRegisteredHandler: function (event) {

        console.log("AM HERE");
        var registrationObj = {
            userId: this.refs.userId.getText(),
            password: this.refs.password.getText(),
            firstName: this.refs.firstname.getText(),
            lastName: this.refs.lastname.getText(),
            otherName: this.refs.othername.getText(),
            course: this.refs.course.getText(),
            email: this.refs.email.getText(),
            dept: this.refs.dept.getSelectedOption(),
            faculty: this.refs.faculty.getSelectedOption()
        };

        console.log(registrationObj);
    },


    render: function () {

        return (
            <div className="container">
                <br/>

                <div className="row">

                    <div className="col s4">
                        <div className="row">
                            <div className="col s12">
                                <img src={"/noun/images/resources.png"} width="500"/>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12">
                                <p>
                                    The National Open University of Nigeria is a Federal Open and Distance Learning
                                    institution, the first of its kind in the West African sub-region.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s5 offset-s3">
                        <div className="row">
                            <div className="col s12">
                                <InputField icon="account_circle" type="text" label="First Name" ref="firstname"
                                            name="firstName"/>
                                <InputField icon="loyalty" type="text" label="Last Name" name="lastName"
                                            ref="lastname"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 ">
                                <InputField icon="account_circle" type="text" label="Other Name" ref="othername"
                                            name="otherName"/>
                                <InputField icon="loyalty" type="email" label="Email" name="email" ref="email"/>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col s12">
                                <InputField icon="verified_user" type="text"
                                            label="ID" name="studentId" ref="userId"/>
                                <InputField icon="verified_user" type="text"
                                            label="Course" name="course" ref="course"/>

                            </div>
                        </div>


                        <div className="row">
                            <div className="col s12">
                                <InputField icon="perm_contact_calendar" type="password"
                                            label="Password" name="password" ref="password"/>
                                <InputField icon="perm_contact_calendar" type="password"
                                            label="Retype Password" name="re_password"/>

                            </div>
                        </div>


                        <div className="row">
                            <div className="col s12 offset-s1">
                                <DropDown optionsList={religion} ref="faculty">Faculty</DropDown>
                                <DropDown optionsList={religion} ref="dept">Department</DropDown>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 offset-s4">
                                <Button name="Submit" onClick={this.onRegisteredHandler}/>
                                </div>
                            </div>
                    </div>
                </div>

            </div>

        );
    }
});


module.exports = RegistrationComponent;
