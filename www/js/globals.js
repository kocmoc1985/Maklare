var MAIN_REST = new REST('fast');


function findFastighet(searchCriterias) {
    MAIN_REST.find("find/" + JSON.stringify(searchCriterias), function (data, textStatus, jqXHR) {
        
    });
}
