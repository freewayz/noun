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
            <footer className="page-footer teal">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Noun Nigeria</h5>

                            <p className="grey-text text-lighten-4">We are a team of college
                                students working on this project like it's our full time
                                job. Any amount would help support and continue development
                                on this project and is greatly appreciated.</p>


                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Category</h5>
                            <ul>
                                <li><a className="white-text" href="#!">Science</a></li>
                                <li><a className="white-text" href="#!">Social-Science</a></li>
                                <li><a className="white-text" href="#!">Education</a></li>
                                <li><a className="white-text" href="#!">Mathematics</a></li>
                            </ul>
                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Connect</h5>
                            <ul>
                                <li><a className="white-text" href="#!">Academic Session</a></li>
                                <li><a className="white-text" href="#!">Student Gist</a></li>
                                <li><a className="white-text" href="#!">Latest News</a></li>
                                <li><a className="white-text" href="#!">VC Office</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Design by <a className="brown-text text-lighten-3" href="http://materializecss.com">Bashir Okinu</a>
                    </div>
                </div>
            </footer>


        )
    }
});

module.exports = FooterComponent;