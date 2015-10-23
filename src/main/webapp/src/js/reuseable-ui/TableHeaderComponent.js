/**
 *
 * Created by azibit on 10/8/15.
 */



var React = require('react');

var TableHeaderComponent = React.createClass({

    propTypes: {
        tableheader_data: React.PropTypes.array.isRequired
    },

    render: function () {
        var th = this.props.tableheader_data.map(function (item, key) {
            return (

                <th data-field={item} key={key}>{item}</th>

            )
        });
        return (
            <thead>
                <tr>
                    {th}
                </tr>
            </thead>
        )

    }
});

module.exports = TableHeaderComponent;