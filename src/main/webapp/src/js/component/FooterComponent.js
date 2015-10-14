/**
 * Created by peter on 8/6/15.
 */


var React = require('react');


var FooterComponent = React.createClass({


    componentDidMount: function () {

        console.log("Footer Mounted");
    },
    render: function () {

        return (
            <footer className="page-footer orange">
                <div className="container">
                    <div className="row">
                        <div classNameName="col l6 s12">
                            <h5 className="white-text">Programming and Online Resources</h5>

                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Learn</h5>
                            <ul>
                                <li><a href="https://developers.google.com/" className="white-text">Google Technology
                                    and API</a></li>
                                <li><a href="www.tutorialspoint.com" className="white-text">Programming Tutorials</a>
                                </li>
                                <li><a href="www.thecodeplayer.com" className="white-text"> Free CSS &amp; Javascript
                                    Code</a></li>
                                <li><a href="pitaside.wordpress.com" className="white-text">Quick Info's</a></li>
                                <li><a href="http://www.google.com/press" className="white-text">Google News</a></li>
                            </ul>
                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Connect</h5>
                            <ul>
                                <li><a className="white-text" href="https://plus.google.com/107415840199830484575">Google +</a></li>
                                <li><a className="white-text" href="www.gdgjsiit.wordpress.com">Blog</a>
                                </li>
                                <li><a className="white-text" href="www.facebook.com/gdg_jsiit">Facebook</a></li>
                                <li><a className="white-text" href="https://twitter.com/gdgjsiit">Twitter</a></li>
                            </ul>
                        </div>

                        <div className="col l6 s12">
                            <div id="location">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Made With Love from <a className="orange-text text-lighten-3"
                                               href="http://materializecss.com">Materialize CSS</a>
                    </div>
                </div>
            </footer>

        )
    }
});

module.exports = FooterComponent;