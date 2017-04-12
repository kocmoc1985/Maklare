var MYMODALS = new MyModals("js/modals/");

var FASTIGHETS_REST = new REST('fastighet');
var BROKERS_REST = new REST('brokers');


function EXAMPLE_ONLY() {
    //GET WITH OPTIONS
    BROKERS_REST.find(_find({_fields: 'name _id', _sort: 'name', _skip: 0, _limit: 3}), function (data, textStatus, jqXHR) {
    });

    //GET ALL
    BROKERS_REST.find('', function (data, textStatus, jqXHR) {
    });

    //GET BY ID
    BROKERS_REST.find('588bc28d9e001a148cf713b7', function (data, textStatus, jqXHR) {
    });

    //GET BY SOME PARAM
    BROKERS_REST.find(_find({name: 'John Doe'}), function (data, textStatus, jqXHR) {
    });
}

function _find(obj) {
    return "find/" + JSON.stringify(obj);
}
