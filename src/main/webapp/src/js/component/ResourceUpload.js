/**
 * Created by azibit on 10/8/15.
 */

var React = require('react');
var InputField = require('./InputFieldComponent');
var DropDown = require('./DropDownComponent');
var TextArea = require('./TextArea');
var SwitchButton = require('./SwitchButton');
var FileUpload = require('./FileUpload');
var TestPhoto = require('./TestPhoto');
var Button = require('./ButtonComponent');
var Reflux = require('reflux');
var ApplicationStore = require('../store/ApplicationStore');
var ApplicationAction = require('../action/ApplicationAction');


var ResourceUpload = React.createClass({

        mixins: [Reflux.connect(ApplicationStore, "application")],
        _onCreateNewResource: function (event) {
            event.preventDefault();
            console.log("Saving a new Resources ......");
            var jsonObj = {
                name: React.findDOMNode(this.refs.resource_name).value,
                course: React.findDOMNode(this.refs.course).value,
                department: this.refs.department,
                faculty: React.findDOMNode(this.refs.faculty).value
            };

            ApplicationStore.onCreateResource(jsonObj);
        },

        getInitialState: function () {

            return {
                facultyList: ["Medicine", "Science", "Social Science"],
                departmentList: ["Accounting", "Geography", "Physics"]

            }
        },
        render: function () {


            var departmentOptions = this.state.departmentList.map(function (item, key) {
                return (<option>{item}</option>);
            });

            var facultyOptions = this.state.facultyList.map(function (item, key) {
                return (<option>{item}</option>);
            });
            return (
                <div>
                    <div className="container">

                        <br/>

                        <form action="api/noun/upload" method="post" enctype="multipart/form-data">
                        <div className="row">
                            <div className="col s6 ">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" className="validate" ref="resource_name"/>
                                    <label for="icon_prefix">Document Name</label>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" className="validate" ref="course"/>
                                    <label for="icon_prefix">Course Name</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col s6">
                                <div className="input-field col s12">
                                    <select ref="dept">
                                        {departmentOptions}
                                    </select>
                                    <label>Department</label>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="input-field col s12">
                                    <select ref="faculty">
                                        {facultyOptions}
                                    </select>
                                    <label>Faculty</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <FileUpload/>
                        </div>

                        <div className="row">
                            <div>
                                <input className="btn waves-effect waves-light" type = "Submit" value = "Save"/>
                            </div>
                        </div>
</form>
                    </div>
                </div>
            )
        }
    })
    ;

module.exports = ResourceUpload;