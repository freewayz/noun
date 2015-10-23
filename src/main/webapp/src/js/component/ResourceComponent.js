/**
 * Created by azibit on 10/8/15.
 */


var React = require('react');
var TableComponent = require('../reuseable-ui/TableComponent');
var NewTableHeader = require('../reuseable-ui/NewTableHeader');
var NewTableRow = require('../reuseable-ui/NewTableRow');
var Reflux = require('reflux');

var ApplicationStore = require('../store/ApplicationStore');
var ApplicationAction = require('../action/ApplicationAction');
var data = [{
    name: "WAEC QUestions",
    dept: "Mathematics",
    faculty: "Engineering",
    url: "google.com",
    date: "Jan 2015",
    course: "AC101"
},
    {
        name: "WAEC QUestions",
        dept: "Mathematics",
        faculty: "Engineering",
        url: "google.com",
        date: "Jan 2015",
        course: "AC101"
    },
    {
        name: "WAEC QUestions",
        dept: "Mathematics",
        faculty: "Engineering",
        url: "google.com",
        date: "Jan 2015",
        course: "AC101"
    },
    {
        name: "WAEC QUestions",
        dept: "Mathematics",
        faculty: "Engineering",
        url: "google.com",
        date: "Jan 2015",
        course: "AC101"
    },
    {
        name: "WAEC QUestions",
        dept: "Mathematics",
        faculty: "Engineering",
        url: "google.com",
        date: "Jan 2015",
        course: "AC101"
    }
];

var headerData = ["SN", "Name", "Dept", "Faculty", "Course", "Date", "URL", "EDIT", "DELETE"];

var ResourceComponent = React.createClass({

    mixins: [Reflux.ListenerMixin],

    setResources: function (resourcesData) {
        this.setState({resources: resourcesData})
    },

    componentDidMount(){
        this.listenTo(ApplicationStore.resourcesData, this.setResources);
        ApplicationAction.getAllResources();
        console.log("Value is " + this.state.resourcesData);
    },

    componentWillMount: function () {
        //ApplicationAction.getAllResources("Maths", "Science");
        //ApplicationAction.getAllResources();
    },
    getInitialState: function () {
        return {
            resources: ApplicationStore.state.resourcesData
        }
    },

    render: function () {
        console.log("Resource " + this.state.resources);
        if (this.state.resources) {
            return (
                <div className="container">
                    <table>
                        <NewTableHeader column_header_data={headerData}/>
                        <NewTableRow column_data={this.state.resources}/>
                    </table>
                </div>
            )
        } else {
            return (<div>Loading.....</div>)
        }


    }
});

module.exports = ResourceComponent;

