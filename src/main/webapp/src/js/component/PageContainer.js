/**
 * Created by peter on 8/10/15.
 */

var React = require('react');
var ReactRouter = require('react-router');


var Container = React.createClass({

    mixins : [ReactRouter.State],

    render: function () {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
});

module.exports = Container;