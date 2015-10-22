/**
 * Created by peter on 10/14/15.
 */


var request = require('superagent');



var JRequest  = function () {


};
JRequest.prototype.sendAjaxRequest  = function(options) {

    return new Promise(function(resolve, reject){
        var request = new XMLHttpRequest();
        request.open(options.method, options.url);
        options.data ? request.send(JSON.stringify(options.data)) : request.send();

        request.onload = function() {
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

        request.onerror = function(){
            console.log('Response: ', result.data);
            reject({status: 500, data: 'Connection error'});
        }
    });
};
module.export = FxApi;