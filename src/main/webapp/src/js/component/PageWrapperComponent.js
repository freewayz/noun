/**
 * Created by azibit on 9/11/15.
 */
/**
 * Created by peter on 8/20/15.
 */


var React = require('react');

var PageWrapper = React.createClass({

    render : function () {
        return(
            <div id="page-wrapper">
                {this.props.children}
            </div>
        )
    }
});

module.exports  = PageWrapper;