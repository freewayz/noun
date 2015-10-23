/**
 * Created by azibit on 10/23/15.
 */

var React = require('react');

var NewTableHeader = React.createClass({
    propsType: {
        column_header_data: React.PropTypes.array.isRequired
    },

    render: function () {

        var column_header_detail = this.props.column_header_data.map(function (item, key) {
            return (<th>{item}</th>)
        });
        return (
            <thead>
            <tr>
                {column_header_detail}
            </tr>
            </thead>

        )
    }
});

module.exports = NewTableHeader;