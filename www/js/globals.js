var FASTIGHETS_REST = new REST('fastighet');
var BROKERS_REST = new REST('brokers');


function findFastighet(searchCriterias) {
    FASTIGHETS_REST.find("find/" + JSON.stringify(searchCriterias), function (data, textStatus, jqXHR) {
        
    });
}
