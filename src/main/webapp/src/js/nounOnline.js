var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('./component/HomePageComponent');
var LoginComponent = require('./component/LoginComponent');
var PageWrapper = require('./component/PageContainer');
var Header = require('./component/HeaderComponent');
var Footer = require('./component/FooterComponent');
var ResourceComponent = require('./component/ResourceComponent');
var ResourceUpload = require('./component/ResourceUpload');
var RefluxComponent = require('./component/RefluxComponent');
var RegistrationComponent = require('./component/RegistrationComponent');

var ImageActions = require('./action/RefluxAction');

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

var Router = (
    <ReactRouter.Route handler={MainApp}>
        <ReactRouter.Route path="/" name="home" handler={HomePage}/>
        <ReactRouter.Route path="/login" name="login" handler={LoginComponent}/>
        <ReactRouter.Route path="/resource" name="resource" handler={ResourceComponent}/>
        <ReactRouter.Route path="/users" name="users" handler={ResourceUpload}/>
        <ReactRouter.Route path="/react-reflux" name="react-reflux" handler={RefluxComponent}/>
        <ReactRouter.Route path="/register" name="register" handler={RegistrationComponent}/>
    </ReactRouter.Route>
);

ReactRouter.run(
    Router,
    function (Handler) {
        React.render(<Handler/>, document.getElementById('noun-entry-point'));
    });


setInterval(function() {
    ImageActions.fetchList();
}, 500000000000);
