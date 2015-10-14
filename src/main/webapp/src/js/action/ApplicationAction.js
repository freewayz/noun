/**
 * Created by azibit on 10/8/15.
 */


var Reflux = require('reflux');
var Request = require('superagent');

var api ={
    BASE_ROOT : 'http://localhost:8080/noun/api/noun',
    CREATE_RESOURCE : this.BASE_ROOT +'create-resource',
    GET_RESOURCE_BASED_ON_DEPT_FACULTY : "/resources/"
};

var ApplicationAction = Reflux.createActions({

    'makeRegistration': {children : ['completed', 'failed']},
    'createResources':{},
    'getAllResources':{}
});


ApplicationAction.makeRegistration.listen(function (resourceJson) {
    Request.post(api.CREATE_RESOURCE, resourceJson, function (res, err) {})
        .then(this.completed).catch(this.failed)
});

//ApplicationAction.getAllResources.listen(function(dept, faculty) {
//    Request.get(api.BASE_ROOT + api.GET_RESOURCE_BASED_ON_DEPT_FACULTY +{dept}+"/"+{faculty},
//        function (error, response) {
//        return response.body
//    })
//});


module.exports = ApplicationAction;