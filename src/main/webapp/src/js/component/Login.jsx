var React =  require('react');
var Router = require('react-router');
var Reflux =require('reflux');
var InputField = require('./InputFieldComponent');

var  AuthStore  = require('../store/AuthStore');
var AuthActions = require ('../action/AuthActions');

var Login = React.createClass({
  mixins: [
    Router.State,
    Router.Navigation,
    Reflux.connect(AuthStore),
    Reflux.ListenerMixin
  ],

  componentDidMount () {
    this.listenTo(AuthStore, this._onAuthChange);
  },

  _onAuthChange(auth) {
    this.setState(auth);

    if(this.state.loggedIn){
      var redirectUrl = this.getQuery().redirect || '/';
      this.replaceWith(redirectUrl);
    }
  },

  _handleSubmit(event) {
    event.preventDefault();

    AuthActions.login(
      this.refs.email.getText(),
     this.refs.password.getText()
    );
  },

  render() {
    var errorMessage;
    if (this.state.error) {
      errorMessage = (
        <div className='state-error' style={{ paddingBottom: 16 }}>
          { this.state.error }
        </div>
      );
    }

    var formContent;
    if (this.state.user) {
      formContent = (
        <div>
          <p>
            You're logged in as <strong>{ this.state.user.name }</strong>.
          </p>
        </div>
      );
    } else {
      formContent = (
        <div>
          { errorMessage }
          <div className="row">
            <div className="col s12 offset-s3 ">
              <InputField icon="perm_identity" ref="email" type="text" label="Username" name="email"/>
            </div>
          </div>
          <div className="row">
            <div className="col s12 offset-s3 grid-example">
              <InputField icon="vpn_key" ref="password" type="text" label="Password" name="password"/>
            </div>

          </div>
          <div className="row">
            <div className="col s12 offset-s2 ">
              <button onClick={ this.handleLogout }>Log In</button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <form onSubmit={this._handleSubmit}>
        { formContent }
      </form>
    );
  }
});


module.exports = Login;