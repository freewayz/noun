/**
 * Created by azibit on 10/8/15.
 */

var React = require('react');
var Reflux = require('reflux');
var RefluxStore = require('../store/RefluxStore');

var ImageGrid = React.createClass({
    mixins: [Reflux.connect(RefluxStore, 'reflux_store')],

    render: function () {
        if(this.state.imageList){
            return (
                <div>
                    {this.state.imageList.map(function (image) {
                        return (
                            <div>
                                <a href={ image.link }>
                                    <img className="img-responsive flickr-thumbnail"
                                         src={ image.media.m }></img>
                                </a>
                            </div>);
                    })}

                </div>
            )
        }else {
            return (<div></div>);
        }

    }
});

module.exports = ImageGrid;