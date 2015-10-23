/** @jsx React.DOM */

/**Created by peter on 8/6/15.*/


var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');

var Header = React.createClass({
    componentDidMount: function () {
    },


    render: function () {
        return (
            <nav className="white" role="navigation">
                <div className="navbar-fixed">
                    <div className="nav-wrapper container">
                        <a id="logo-container" href="#" className="brand-logo">
                             <img src={"/noun/images/logo_noun_2.png"} width="50" height="50"/>
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><ReactRouter.Link activeClassName="selected" to="home">Home</ReactRouter.Link></li>
                            <li><ReactRouter.Link activeClassName="selected" to="resource">All Resources</ReactRouter.Link></li>
                            <li><ReactRouter.Link activeClassName="selected" to="resource">Faculty Resource</ReactRouter.Link></li>
                            <li><ReactRouter.Link activeClassName="selected" to="resource">Department Resource</ReactRouter.Link></li>
                            <li><ReactRouter.Link activeClassName="selected" to="login">Contact Us</ReactRouter.Link></li>
                            <li><ReactRouter.Link activeClassName="selected" to="login">Login</ReactRouter.Link></li>
                        </ul>
                        <a data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                    </div>
                </div>
            </nav>
        )
    }
});

module.exports = Header;

