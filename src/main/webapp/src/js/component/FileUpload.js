/**
 * Created by azibit on 9/17/15.
 */

var React = require('react');
var FileUpload = React.createClass({
    render: function () {
        return (
            <div className="file-field input-field">
                <div className="btn">
                    <span>File</span>
                    <input type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="Upload Resource file"/>
                        </div>
                    </div>
        );
    }
});

module.exports = FileUpload;