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
var History = require('react-router');
var auth = require('../utils/auth');

var LoginComponent = React.createClass({

    mixin: [History],

    getInitialState : function () {

        return {
            error: false
        }
    },

    handleSubmit(event) {
        event.preventDefault()

        var email = this.refs.email.value
        var pass = this.refs.pass.value

        auth.login(email, pass, function (loggedIn){
            if (!loggedIn)
                return this.setState({error: true});

            var location = this.props;

            if (location.state && location.state.nextPathname) {
                this.history.replaceState(null, location.state.nextPathname)
            } else {
                this.history.replaceState(null, '/about')
            }
        })
    },

    render: function () {

        return (
            <div className="container">
                <br/>
                <form  onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col s12 offset-s3 grid-example">
                            <InputField icon="perm_identity" type="text" label="Username" name="username"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 offset-s3 grid-example">
                            <InputField icon="vpn_key" type="text" label="Password" name="password"/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col s12 offset-s4 ">
                            <button type="submit">Login</button>
                            {this.state.error && (<p>Bad login information</p>)}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = LoginComponent;