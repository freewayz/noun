/**
 * Created by azibit on 10/8/15.
 */


var Reflux = require('reflux');
var ApplicationAction = require('../action/ApplicationAction');
var request = require('superagent');
var StateMixin = require('reflux-state-mixin')(Reflux);
var apiURL = {
    BASE_ROOT: 'http://localhost:8080/noun/api/noun/',
    CREATE_RESOURCE: 'resources/create',
    UPDATE_RESOURCE: 'resources/update',
    GET_RESOURCE_BASED_ON_DEPT_FACULTY: "resources/query/"
};
var ApplicationStore = Reflux.createStore({
    listenables: [ApplicationAction], mixins :[StateMixin],

    init: function () {

    },


    getInitialState: function () {
        return {
            resourcesData: [],
            isRegistered: false
        }
    },


    onMakeRegistrationCompleted: function (response) {
        console.log("stored called");
        var httpResponse = response.body;
        console.log(JSON.stringify(httpResponse));
        if (httpResponse) {
            this.state.isRegistered = false;
        }
    },

    onMakeRegistrationFailed: function (result) {
        console.log(result)
    },


    onCreateResourceCompleted: function (response) {
        console.log("Creating new Resources with json data of" + response.body);
        if (response.ok) {

        }
    },

    onGetAllResourcesCompleted: function (result) {
        console.log("inside store " + result.data);
        this.setState({resourceData : result.data});
        //this.state.resourceData = result.data;
    },

    onGetAllResourceFailed : function (result) {
        console.log("Error Occurred " + result)
    }
});

module.exports = ApplicationStore;
