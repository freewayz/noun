/**
 * Created by azibit on 9/11/15.
 */

var React = require('react');
var DropDown = React.createClass({

    propTypes: {
        optionsList: React.PropTypes.array
    },

    getSelectedOption : function () {
        return React.findDOMNode(this.refs.selectOption).value;
    },
    render: function () {

        var options = this.props.optionsList.map(function (item, key) {
            return (<option key={item} value={item}>{item}</option>);
        });

        return (

                <div className="input-field col s3">
                    <select ref="selectOption">
                        {options}
                    </select>
                    <label>{this.props.children}</label>
                </div>
        );
    }
});

module.exports = DropDown;