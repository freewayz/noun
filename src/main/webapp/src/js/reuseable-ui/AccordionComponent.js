/**
 * Created by peter on 8/28/15.
 */



var React = require('react');

var AccordionComponent = React.createClass({

    render: function () {
        return (
            <ul className="collapsible popout" data-collapsible="accordion">
                {this.props.children}
            </ul>
        )
    }
});

module.exports = AccordionComponent;