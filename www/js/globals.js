//
console.log = function() {}; // kommentera ut för att aktivera console messages
console.warn = function(){};
//

var MYMODALS = new MyModals("js/modals/");

var FASTIGHETS_REST = new REST('fastighet');
var BROKERS_REST = new REST('brokers');
var VISNING_REST = new REST('visning');

addScrollTopListener();

var TABLE_VISNING;

function createTableVisning(fastighet) {
//    console.log("CreateTableVisning: ",fastighet);
     TABLE_VISNING = new MyCrudTable(
            'visning',
            false,
            VISNING_REST,
            'Visningar',
            '#show-visningar',
            ['Tillfälle ett', 'Tillfälle två', 'Tillfälle tre'],
            ['time1', 'time2', 'time3'],
            {fastighet:fastighet,_fields: '', _sort: 'fastighet', _skip: 0, _limit: 5}
    );
}

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
