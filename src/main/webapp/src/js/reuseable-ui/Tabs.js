/**
 * Created by azibit on 10/14/15.
 */

var React = require('react');
var TabPanel = require('./TabPanel');


var Tabs = React.createClass({
    componentWillMount: function () {

    },

    _renderChildren: function () {
        return React.Children.map(this.props.children, (child) => {
            //check if the child props @code tabName value is not specified
            if (child.props.tabName) {
                var name = child.props.tabName.toLowerCase().replace(" ", "");
                return (
                    <li className="tab col s3">
                        <a href={"#"+name}>
                            {child.props.tabName}
                        </a>
                    </li>
                );
            }
        });
    },
    render: function () {

        return (
            <div>
                <ul className="tabs">
                    {this._renderChildren()}
                </ul>
                <TabPanel>
                    {this.props.children}
                </TabPanel>
            </div>

        )
    }
});

module.exports = Tabs;