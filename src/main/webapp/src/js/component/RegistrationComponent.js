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

    getInitialState : function () {
        return{
            isRegistered : false
        }
    },
    mixins : [Reflux.ListenerMixin],

    onRegisteredHandler : function (event) {
        var registrationObj = {
            userId : this.refs.userId.getText(),
            email :this.refs.email.getText(),
            password : this.refs.password.getText(),
            role : this.refs.role.getText(),
            firstName :this.refs.firstname.getText(),
            lastName : this.refs.lastname.getText(),
            otherName :this.refs.othername.getText(),
            course : this.refs.course.getText(),
            dept : this.refs.dept.getSelectedOption(),
            faculty :this.refs.faculty.getSelectedOption()

        };
        ApplicationAction.makeRegistration(registrationObj);
    },


    listendForRegistrationChanges : function (newState) {
        this.setState({isRegistered : newState});
    },
    componentDidMount(){
        this.listenTo(ApplicationStore)
    },

    render: function () {

        return (
            <div className = "container">

                <br/>
                <div className = "row">
                    <div  className = "col s12 offset-s1 grid-example">
                        <InputField icon = "account_circle" type = "text" label = "First Name" name = "firstName"/>
                        <InputField icon = "loyalty" type = "text" label = "Last Name" name = "lastName"/>
                    </div>
                </div>


                <div className = "row">
                    <div  className = "col s12 offset-s1 grid-example">
                        <InputField icon = "verified_user" type = "text" label = "ID" name = "studentId"/>
                        <InputField icon = "perm_contact_calendar" type = "text" label = "Password" name = "password"/>

                    </div>
                </div>


                <div className = "row">
                    <div  className = "col s12 offset-s1 grid-example">
                        <InputField icon = "perm_contact_calendar" type = "text" label = "Retype Password" name = "re_password"/>
                        <DropDown optionsList = {religion}>Faculty</DropDown>
                        <DropDown optionsList = {religion}>Department</DropDown>
                    </div>
                </div>



                <div className = "row">
                    <div className = "col s12 offset-s6 grid-example">
                        <ReactRouter.Link activeClassName="selected"  to="login">
                            <Button name = "Sign in" icon = "replay"/>
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


module.exports = RegistrationComponent;
