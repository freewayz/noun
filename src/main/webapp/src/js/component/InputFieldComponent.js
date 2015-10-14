/**
 * Created by azibit on 9/11/15.
 */

var React = require('react');
var InputField = React.createClass({
    getDefaultProps : function(){
        return {
            classValue : "validate"
        };
    },

    render: function () {

        return (
            <div className="input-field col s6">
                <i className="material-icons prefix">{this.props.icon}</i>
                <input name = {this.props.name} id={this.props.id} type={this.props.type}
                       className = {this.props.classValue} min = {this.props.min} max = {this.props.max}/>
                <label htmlFor={this.props.id}>{this.props.label}</label>

            </div>
        );
    }
});

module.exports = InputField;