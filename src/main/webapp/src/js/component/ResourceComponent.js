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

var headerData = ["Name", "Dept", "Faculty", "Course", "Date", "URL", "DELETE"];

var ResourceComponent = React.createClass({

    mixins: [Reflux.ListenerMixin],

    setResources: function (resources) {
        this.setState({resources: resources})
    },

    componentDidMount(){
        ApplicationAction.getAllResources();
        this.listenTo(ApplicationStore.resourcesData, this.setResources);
        console.log("Value is " + this.state.resourcesData);
    },

    componentWillMount: function () {
        //ApplicationAction.getAllResources("Maths", "Science");
    },
    getInitialState: function () {
        return {
            resources: ApplicationStore.state.resourceData
        }
    },

    render: function () {
        console.log("Resource " + this.state.resources);
        return (
            <div>
                <table>
                    <NewTableHeader column_header_data={headerData}/>
                    <NewTableRow column_data={data}/>
                </table>
            </div>
        )
    }
});

module.exports = ResourceComponent;

