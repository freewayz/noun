var React =  require('react');
var Router = require('react-router');
var Reflux =require('reflux');

var  AuthStore  = require('../store/AuthStore');
var AuthActions = require ('../action/AuthActions');

var Login = React.createClass({
  mixins: [
    Router.State,
    Router.Navigation,
    Reflux.connect(AuthStore),
    Reflux.ListenerMixin
  ],

  listenables: [AuthActions],

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

      console.log(React.findDOMNode(this.refs.email).value);
      AuthStore.login(
      React.findDOMNode(this.refs.email).value,
      React.findDOMNode(this.refs.password).value
    );
  },

  handleLogout() {
      AuthStore.logout();
    this.transitionTo('/login');
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
          Email: <input defaultValue="iwritecode@preact.com" ref="email" style={{ maxWidth: '100%' }} type="email" />
          <br/>
          Password: <input defaultValue="wearehiring!" ref="password" style={{ maxWidth: '100%' }} type="password" />
          <br/>
          <button onClick={ this.handleLogout }>Log In</button>
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