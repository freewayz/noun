/**
 * Created by peter on 8/28/15.
 */



var React = require('react');

var CardComponent = React.createClass({

    propTypes: {
        card_image: React.PropTypes.string,
        card_title: React.PropTypes.string,
        card_back_desc: React.PropTypes.string,
        card_href: React.PropTypes.string
    },

    render: function () {

        return (

            <div className="card small">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator"
                             src="https://s-media-cache-ak0.pinimg.com/236x/98/21/90/982190899eefd426b71a5b3e8f66f940.jpg"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            {this.props.card_title}
                            <i className="material-icons right">Info</i></span>

                        <p><a href="#">Github</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{this.props.card_title}<i
                            className="material-icons right">close</i></span>

                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>

        )
    }
});

module.exports = CardComponent;