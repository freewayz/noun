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
        <div className="section">
          { errorMessage }
          <div className="row">
            <div className="col s5 offset-s1">
                <img src={"/noun/images/noun-ilearn.jpg"}/>
            </div>

            <div className="col s4">
              <div className="row">
                <div className="col s12 offset-s2">
                  <InputField icon="perm_identity" ref="email" type="text" label="Username" name="email"/>
                </div>
              </div>
              <div className="row">
                <div className="col s12  offset-s2">
                  <InputField icon="vpn_key" ref="password" type="text" label="Password" name="password"/>
                </div>

              </div>
              <div className="row">
                <div className="col s12 offset-s4">
                  <button className="btn waves-effect waves-light" onClick={ this.handleLogout }>Log In
                    <i className="material-icons right">send</i>
                  </button>
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  <span className="offset-s5"/>
                  <Router.Link activeClassName="selected" to="register">
                    <button className="btn waves-effect waves-light">
                      Sign Up
                      <i className="material-icons right">send</i>
                    </button>
                  </Router.Link>
                </div>
              </div>
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