/**
 * Created by azibit on 9/17/15.
 */

var React = require('react');
var SwitchButton = React.createClass({
    render: function () {
        return (
            <div className="switch">
                <label>
                    Off
                    <input type="checkbox"/>
                        <span className="lever"></span>
                        On
                    </label>
                </div>
        );
    }
});

module.exports = SwitchButton;