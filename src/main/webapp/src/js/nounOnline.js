var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('./component/HomePageComponent');
var LoginComponent = require('./component/Login.jsx');
var PageWrapper = require('./component/PageContainer');
var Header = require('./component/HeaderComponent');
var Footer = require('./component/FooterComponent');
var ResourceComponent = require('./component/ResourceComponent');
var ResourceUpload = require('./component/ResourceUpload');
var RegistrationComponent = require('./component/RegistrationComponent');
var auth = require('./utils/auth');
var LoginRequired = require('./utils/RouteHelpers');

var MainApp = React.createClass({

    mixin: [ReactRouter.State],
    render: function () {
        return (
            <div>
                <Header/>
                <PageWrapper>
                    <ReactRouter.RouteHandler/>
                </PageWrapper>
                <Footer/>
            </div>
        );
    }
});
function requireAuth(nextState, replaceState) {
    if (!auth.loggedIn())
        replaceState({nextPathname: nextState.location.pathname}, '/login')
}
var Router = (
    <ReactRouter.Route>
        <ReactRouter.Route handler={MainApp}>
            <ReactRouter.Route path="/login" name="login" handler={LoginComponent}/>
            <ReactRouter.Route path="/" name="home" handler={HomePage}/>
            <ReactRouter.Route path="/resource" name="resource" handler={ResourceComponent}/>
            <ReactRouter.Route path="/users" name="users" handler={ResourceUpload}/>
            <ReactRouter.Route path="/register" name="register" handler={RegistrationComponent}/>
        </ReactRouter.Route>
    </ReactRouter.Route>
);


ReactRouter.run(
    Router,
    function (Handler) {
        React.render(<Handler/>, document.getElementById('noun-entry-point'));
    });


