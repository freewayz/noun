/**
 * Created by azibit on 10/8/15.
 */


var React = require('react');

var TableColumnData = React.createClass({

    propTypes: {
        columnData: React.PropTypes.array.isRequired
    },

    render: function () {
        var table_row = this.props.columnData.map(function (item, key) {
            return (
                <td>
                    {item}
                </td>
            )
        })

        return (
            <tr>
                {table_row}
            </tr>
        )
    }
});

module.exports = TableColumnData;