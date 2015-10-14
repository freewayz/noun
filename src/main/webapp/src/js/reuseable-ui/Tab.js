/**
 * Created by azibit on 10/13/15.
 */

/**
 * Created by peter on 10/5/15.
 */

var React = require('react');


var Tab = React.createClass({

    propTypes : {

        active : React.PropTypes.bool,
        tabClassName : React.PropTypes.string,
        tabName :React.PropTypes.string
    },

    render : function () {

        var classes = {
            'tab-pane' : true,
            'active': this.props.active
        }
        return(

            <div className="col s12" id={this.props.tabName.toLowerCase()}>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Tab;