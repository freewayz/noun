/**
 * Created by peter on 8/28/15.
 */

var React = require('react');

var AccordionInfoComponent  = React.createClass({

    propTypes :{

        collapsible_header : React.PropTypes.string,
        collapsible_body: React.PropTypes.string
    },
    
    render : function () {
        return(
            <li>
                <div className="collapsible-header"><i className="material-icons"></i>First</div>
                <div className="collapsible-body"><p>{this.props.collapsible_body}</p></div>
            </li>
        )
    }
});

module.exports = AccordionInfoComponent;