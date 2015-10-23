/**
 * Created by azibit on 9/11/15.
 */
/**
 * Created by peter on 8/20/15.
 */


var React = require('react');
var render = require('react-dom')
var auth = require('../utils/auth');

var PageWrapper = React.createClass({

    getInitialState : function () {

        return{
            loggedIn : auth.loggedIn()
        }
    },


    updateAuth : function (loggedIn) {
        this.setState({loggedIn : loggedIn})
    },

    render : function () {
        return(
            <div id="page-wrapper">
                {this.props.children}
            </div>
        )
    }
});

module.exports  = PageWrapper;