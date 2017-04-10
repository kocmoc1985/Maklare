var TABLE_BROKERS;
var TABLE_FASTIGHETER;
var MYMODALS = new MyModalsCrud("js/modals/");

$(document).ready(function () {
    createCrudTables();
    $('#showCrudTableBrokers').click(function () {
        TABLE_BROKERS.show(true);
    });
    
     $('#showCrudTableFastigheter').click(function () {
        TABLE_FASTIGHETER.show(true);
    });
});

function createCrudTables() {
    TABLE_BROKERS = new MyCrudTable(
            'brokers',
            true,
            BROKERS_REST,
            'Administrate Brokers',
            '#output',
            ['Name', 'Tel', 'Epost', 'ShortInfo', 'Image'],
            ['name', 'tel', 'epost', 'shortInfo', 'image'],
            {_fields: '', _sort: 'nr', _skip: 0, _limit: 5}
    );
    
    TABLE_BROKERS.setShowAlwaysInvert();
    
     TABLE_FASTIGHETER = new MyCrudTable(
        'fastigheter',
        true,
        FASTIGHETS_REST,
        'Administrera Fastigheter',
        '#output',
        ['DateAdded','Type', 'Price', 'Area','Rooms','Hyra','Country','Län','Town','Street','ZIP','ShortInfo','LongInfo','Images'],
        ['dateAdded','type', 'price', 'area','rooms','hyra','country','lan','town','street','zip','shortInfo','longInfo','images'],
        {_fields: '', _sort: 'price', _skip: 0, _limit: 1},
        'noModalPreview',
        'broker',
        {name: 'Name', epost: 'Epost',shortInfo:'Info'},
        {name: BROKERS_REST}
);

TABLE_FASTIGHETER.setShowAlwaysInvert();
}

