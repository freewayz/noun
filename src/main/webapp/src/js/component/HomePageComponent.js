/**
 * Created by azibit on 9/11/15.
 */

var React = require('react');
var InputField = require('./InputFieldComponent');
var DropDown = require('./DropDownComponent');
var TextArea = require('./TextArea');
var SwitchButton = require('./SwitchButton');
var FileUpload = require('./FileUpload');
var TestPhoto = require('./TestPhoto');
var Button = require('./ButtonComponent');
var ReactRouter = require('react-router');

var HomePage = React.createClass({

    render: function () {
        return (
            <div>
                <div id="index-banner" className="parallax-container">
                    <div classNameName="section no-pad-bot">
                        <div className="container">
                            <br/><br/>
                            <div className="row center">

                            </div>
                            <div className="row center">

                            </div>
                            <div className="row center">

                            </div>
                            <div className="row center">
                                <a href="http://materializecss.com/getting-started.html" id="download-button"
                                   className="btn-large waves-effect waves-light teal lighten-1">View Resources</a>
                            </div>
                            <br/><br/>

                        </div>
                    </div>

                    <div className="parallax"><img src={"/noun/images/now_bg.jpg"} alt="Unsplashed background img 1"/></div>
                </div>


                <div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">flash_on</i>
                                    </h2>
                                    <h5 className="center">Learn New Stuff</h5>

                                    <p className="light">We did most of the heavy lifting for you to provide
                                        a default stylings that incorporate our custom components.
                                        Additionally, we refined animations and transitions to provide a
                                        smoother experience for developers.</p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">group</i>
                                    </h2>
                                    <h5 className="center">Reseearch Lab</h5>

                                    <p className="light">By utilizing elements and principles of Material
                                        Design, we were able to create a framework that incorporates
                                        components and animations that provide more feedback to users.
                                        Additionally, a single underlying responsive system across all
                                        platforms allow for a more unified user experience.</p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">settings</i>
                                    </h2>
                                    <h5 className="center">Easy to work with</h5>

                                    <p className="light">We have provided detailed documentation as well as
                                        specific code examples to help new users get started. We are
                                        also always open to feedback and can answer any questions a user
                                        may have about Materialize.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
});


module.exports = HomePage;