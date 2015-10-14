/**
 * Created by azibit on 10/8/15.
 */



var React = require('react');
var TableHeader = require('./TableHeaderComponent');
var TableColumnData = require('./TableColumnData');

var TableComponent = React.createClass({

    propTypes: {

        table_data: React.PropTypes.array.isRequired,
        header_data: React.PropTypes.array.isRequired
    },

    render: function () {
        var data = [];
        var table_column = this.props.table_data.map(function (items) {
            data = Object.keys(items).map(function (it, key) {
                return items[it]
            })
            return <TableColumnData columnData = {data}/>
        })
        return (
            <table>
                <TableHeader tableheader_data={this.props.header_data}/>
                <tbody>
                {table_column}
                </tbody>
            </table>
        )
    }
});


module.exports = TableComponent;