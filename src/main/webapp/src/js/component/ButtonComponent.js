/**
 * Created by azibit on 10/7/15.
 */
var React = require('react');


var ButtonComponent = React.createClass({
    render: function () {
        return (

                <button className="btn waves-effect waves-light" type="submit"
                        name="action" onClick={this.props.onClick} >
                    {this.props.name}
                    <i className="material-icons right">{this.props.icon}</i>
                </button>

        );
    }
});

module.exports = ButtonComponent;