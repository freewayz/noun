/**
 * Created by azibit on 10/8/15.
 */


var React = require('react');
var TableComponent = require('../reuseable-ui/TableComponent');
var Reflux = require('reflux');

var ApplicationStore = require('../store/ApplicationStore');
var ApplicationAction = require('../action/ApplicationAction');
var data = [{
    name : "WAEC QUestions",
    dept : "Mathematics",
    faculty : "Engineering",
    url : "google.com",
    date : "Jan 2015",
    course : "AC101"
},
    {
        name : "WAEC QUestions",
        dept : "Mathematics",
        faculty : "Engineering",
        url : "google.com",
        date : "Jan 2015",
        course : "AC101"
    },
    {
        name : "WAEC QUestions",
        dept : "Mathematics",
        faculty : "Engineering",
        url : "google.com",
        date : "Jan 2015",
        course : "AC101"
    },
    {
        name : "WAEC QUestions",
        dept : "Mathematics",
        faculty : "Engineering",
        url : "google.com",
        date : "Jan 2015",
        course : "AC101"
    },
    {
        name : "WAEC QUestions",
        dept : "Mathematics",
        faculty : "Engineering",
        url : "google.com",
        date : "Jan 2015",
        course : "AC101"
    }
];

var headerData = ["Name", "Dept", "Faculty", "Course", "Date", "URL"];

var ResourceComponent = React.createClass({

    mixins: [Reflux.ListenerMixin],

    setResources : function (rs) {
        this.setState({resources: rs})
    },

    componentDidMount(){
        ApplicationAction.getAllResources("Maths", "Science");
        this.listenTo(ApplicationStore.resourcesData, this.setResources);
        console.log("Value is " + this.state.resourcesData);
    },

    getInitialState: function () {
        return {
            resources: {data}
        }
    },


    render: function () {
        return(
            <div>
                <TableComponent table_data = {data} header_data = {headerData}/>
            </div>
        )
    }
});

module.exports = ResourceComponent;

