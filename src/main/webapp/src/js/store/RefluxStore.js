/**
 * Created by azibit on 10/8/15.
 */

var Reflux = require('reflux');
var $ = require('jquery');
var actions = require('../action/RefluxAction');


var RefluxStore = Reflux.createStore({


    listenables: actions,

    person : {
        "name": "Abdul Azeez",
        "age": 22

    },

    writeUp: "AA",

    showValue : 1,

    s: "",
    onUpdateAge: function () {
        this.person.age = Math.random() * 100;
        this.trigger(this.person);
    },

    onDoWriteUp: function () {
        this.writeUp = 'Abdul Azeez is My Name';
        this.trigger(this.writeUp);
    },

    onMoveData: function () {

        console.log("Key Up");
        this.showValue = this.showValue + 1;
        this.trigger(this.showValue);
    },

    onClickToSubmit: function (data) {
        this.s = data;
        this.trigger(this.s);
    },

    getInitialState: function(){
        return {
            person: {}
        }
    }
});

module.exports = RefluxStore;

