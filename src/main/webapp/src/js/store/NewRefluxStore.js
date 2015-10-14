/**
 * Created by azibit on 10/10/15.
 */

var Reflux = require('reflux');
var Action = require('./store/NewReflux');

var todoCounter = 0,
    localStorageKey = "todos";


var NewRefluxStore = Reflux.createStore({

    listenables: ['Action'],

    getItemByKey: function (list, itemKey) {
        return _.find(list, function(item) {
            return item.key === itemKey;
        });
    },

    onEditItem: function(itemKey, newLabel) {
        var foundItem = getItemByKey(this.list,itemKey);
        if (!foundItem) {
            return;
        }
        foundItem.label = newLabel;
        this.updateList(this.list);
    },

    onAddItem: function(label) {
        this.updateList([{
            key: todoCounter++,
            created: new Date(),
            isComplete: false,
            label: label
        }].concat(this.list));
    },

    onRemoveItem: function(itemKey) {
        this.updateList(_.filter(this.list,function(item){
            return item.key!==itemKey;
        }));
    }

});

module.exports = NewRefluxStore;