/**
 * Created by azibit on 10/13/15.
 */

var React = require('react');

var TabPanel = React.createClass({

    render : function () {
        return(
            <div className="row">
                <div className = "col s12">
                    {this.props.children}
                </div>
            </div>
        )
    }
})


module.exports = TabPanel;