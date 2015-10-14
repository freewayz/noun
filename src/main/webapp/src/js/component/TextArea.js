/**
 * Created by azibit on 9/17/15.
 */

var React = require('react');
var TextArea = React.createClass({
    render: function () {
        return (

            <div className = "row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <label htmlFor="textarea1">{this.props.children}</label>
                </div>
            </div>
        );
    }
});

module.exports = TextArea;