/**
 * Created by azibit on 10/23/15.
 */

/**
 * Created by peter on 8/25/15.
 * @code TableColumnDataComponent hold the
 * data for each rows in the table
 * requires an propstype of array to be passed
 */

var React = require('react');
var ApplicationStore = require('../store/ApplicationStore');
var ApplicationAction = require('../action/ApplicationAction');


var NewTableRow = React.createClass({
    propsType: {
        column_data: React.PropTypes.array.isRequired
    },


    deleteClick: function (data, event) {
        console.log("Edit Here" + data);
        var newStateData = this.state.newData;
        console.log("Oldee" + newStateData);
        newStateData.splice(data, 1);
        this.setState({newData: newStateData});

    },

    getInitialState: function () {
        return {
            newData: this.props.column_data,
            value: 0
        };
    },


    editClick: function (data, event) {
        ApplicationAction.editDataArray(this.state.newData[data]);
    },


    render: function () {

        var data;
        var count = -1;
        var table_row_data = this.state.newData.map(function (json_obj) {
            count += 1;
            data = Object.keys(json_obj).map(function (key) {
                return <td key={key}>{json_obj[key]}</td>;

            });
            return (
                <tr className="odd">
                    {data}

                    <td>
                        <i className="material-icons" onClick={this.deleteClick.bind(this, count)}>delete</i>
                    </td>


                </tr>
            )
        }.bind(this));

        console.log("Table Row Count is  " + table_row_data);

        return (<tbody>
        {table_row_data}
        </tbody>
        )


    }
});

module.exports = NewTableRow;