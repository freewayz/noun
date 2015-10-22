/**
 * Created by azibit on 10/8/15.
 */


var React = require('react');

var TableColumnData = React.createClass({

    propTypes: {
        columnData: React.PropTypes.array.isRequired,
        onEditRes : React.PropTypes.func,
        onDeleteRes : React.PropTypes.func
    },


    render: function () {
        var table_row = this.props.columnData.map(function (item, key) {
            return (
                <td>{item}</td>
            )
        });


        return (
            <tr>
                {table_row}
                <td><i className="material-icons" onClick={this.props.onEditRes}>edit</i></td>
                <td><i className="material-icons" onClick={this.props.onDeleteRes}>delete</i></td>
            </tr>
        )
    }
});

module.exports = TableColumnData;