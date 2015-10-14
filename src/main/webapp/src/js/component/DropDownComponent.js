/**
 * Created by azibit on 9/11/15.
 */

var React = require('react');
var DropDown = React.createClass({

    propTypes: {
        optionsList: React.PropTypes.array
    },

    render: function () {

        var options = this.props.optionsList.map(function (item, key) {
            return (<option>{item}</option>);
        });

        return (

                <div className="input-field col s3">
                    <select>
                        {options}
                    </select>
                    <label>{this.props.children}</label>
                </div>
        );
    }
});

module.exports = DropDown;