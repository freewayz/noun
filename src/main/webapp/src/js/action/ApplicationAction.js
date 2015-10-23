/**
 * Created by azibit on 10/8/15.
 */


var Reflux = require('reflux');
var Request = require('superagent');


var sendAjaxRequest = function (options) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open(options.method, options.url);

        //console.log(`Sending ${options.method} Request to ${options.url}`);
        console.log("Insede FxApi");
        options.data ? request.send(JSON.stringify(options.data)) : request.send();

        request.onload = function () {
            var result = {
                status: request.status,
                data: JSON.parse(request.responseText)
            };
            if (result.status >= 200 && result.status <= 299) {
                console.log('Response: ', result.data);
                resolve(result);
            } else {
                console.log('Response: ', result.data);
                reject(result);
            }
        };

        request.onerror = function () {
            console.log('Response: ', result.data);
            reject({status: 500, data: 'Connection error'});
        }
    });
};
var api = {
    BASE_ROOT: 'http://localhost:8080/noun/api/noun',
    CREATE_RESOURCE: 'create-resource',
    GET_RESOURCE_BASED_ON_DEPT_FACULTY: "/resources/",
    RESOURCE: "/resources/",
    USER: "users/",
    GET_ALL_RESOURCE: 'all',
    REGISTRATION: 'create'
};

var apiHeaders = {
    'Accept': '*/*',
    'Content-Type': 'application/json'
};

var ApplicationAction = Reflux.createActions({

    'makeRegistration': {children: ['completed', 'failed']},
    'createResources': {children: ['completed', 'failed']},
    'getAllResources': {children: ['completed', 'failed']},
    'getResourceByDeptFaculty': {children: ['completed', 'failed']},
    'resources':{}
});


ApplicationAction.makeRegistration.listen(function (resourceJson) {
    var registrationInfo = {
        method: 'POST',
        data: resourceJson,
        url: api.BASE_ROOT + api.USER + api.REGISTRATION
    };
   sendAjaxRequest(registrationInfo).then(this.completed).catch(this.failed)
});


ApplicationAction.getResourceByDeptFaculty.listen(function (dept, faculty) {
    var url = api.BASE_ROOT + api.GET_RESOURCE_BASED_ON_DEPT_FACULTY + "/" + {dept} + "/" + {faculty};
    Request.get(url).set().end()
        .then(this.completed, this.failed);
});

ApplicationAction.getAllResources.listen(function () {
    console.log("resource action is been called");
    var optionsInfo = {
        url: api.BASE_ROOT + api.RESOURCE + api.GET_ALL_RESOURCE,
        method: 'GET'
    };
    sendAjaxRequest(optionsInfo).then(this.completed).catch(this.failed)

});

ApplicationAction.createResources.listen(function (registrationJson) {
    console.log("Creating new user");
    var registrationInfo = {
        method: 'POST',
        data: registrationJson,
        url: api.BASE_ROOT + api.CREATE_RESOURCE
    };
   sendAjaxRequest(registrationInfo).then(this.completed).catch(this.failed)
});


module.exports = ApplicationAction;