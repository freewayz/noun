/**
 * Created by azibit on 10/8/15.
 */


var Reflux = require('reflux');
var ApplicationAction = require('../action/ApplicationAction');
var request = require('superagent');

var apiURL = {
    BASE_ROOT: 'http://localhost:8080/noun/api/noun/',
    CREATE_RESOURCE: 'resources/create',
    UPDATE_RESOURCE: 'resources/update',
    GET_RESOURCE_BASED_ON_DEPT_FACULTY : "resources/query/"
};
var ApplicationStore = Reflux.createStore({


    listenables: [ApplicationAction],

    init: function () {

    },


    getInitialState: function () {
        return {
            resourcesData: []
        }
    },


    onMakeRegistration: function (res, err) {
        console.log("stored called");
        res.body.then(function (response) {
            console.log(JSON.stringify(response))
        })
    },


    onCreateResource: function (jsonObj) {
        console.log("Creating new Resources with json data of" + jsonObj);
        request.post(apiURL.BASE_ROOT + apiURL.CREATE_RESOURCE, jsonObj, function (error, response) {
            if (response.ok) {
                console.log(response.body);
            } else {
                console.log(error)
            }
        }.bind(this))
    },

    onGetAllResources: function (dept, faculty) {
        request.get(apiURL.BASE_ROOT + apiURL.GET_RESOURCE_BASED_ON_DEPT_FACULTY+ {dept} + "/" + {faculty},
            function (error, response) {
                if (response.ok) {
                    console.log(response);
                    this.trigger({resourcesData: response.body})
                    this.trigger(this.state.resourcesData)
                } else {
                    console.log(error)
                }
            }.bind(this))
    }
});

module.exports = ApplicationStore;
