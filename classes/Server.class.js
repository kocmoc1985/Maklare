'use strict';

module.exports = class Server {
    constructor() {
        // save our settings to this
        this.settings = g.settings.Server;

        // add express to this
        this.app = m.express();

        // run the setup method
        this.setup();
        this.main();
        this.listen();
    }

    setup() {
        // tell express to use middleware to parse JSON
        this.app.use(m.bodyparser.json({limit: '5mb'}));
        // declare a webroot
        this.app.use(
                m.express.static(
                        m.path.join(g.settings.appRoot, this.settings.webroot)
                        )
                );

        // compress all files using gzip
        this.app.use(m.compression());

        // parse all request cookies
        this.app.use(m.cookieparser());

        // parse all urlencoded request body data
        // for example from "standard" HTML forms
        //Restrouter also needs this
        this.app.use(m.bodyparser.urlencoded({extended: false, limit: '5mb'}));
    }

    main() {
        var sha1 = require('sha1');
        global.sha1 = sha1;
        global.passwordSalt = "kocmoc";

        var Sessionhandler = require('./session/sessionhandler.class');
        var Mymiddleware = require('./moduls/MyMiddleware.class');
        var Restrouter = require('./restrouterP.class');

        var mset = g.settings.MONGOOSE; // see 'settingsConstr.js'

        if (mset.connect === 'true') {

            var mongoose = require('mongoose');
            // Stop mongoose from using an old promise library
            mongoose.Promise = Promise;
            //
            var Session = require('./session/models/session.model')(mongoose);
            this.app.use(new Sessionhandler(Session).middleware());
            //
            //Implements some basic functionality, OBS! Must be placed here
            new Mymiddleware(this.app);
            //
            var fastighetModel = require('./models/Fastighet.model')(mongoose);
            var brokersModel = require('./models/Brokers.model')(mongoose);
            //
            var models = [fastighetModel, brokersModel];
            //
            var JSONLoader = require('./json/jsonLoader.class')(models);
            //
            //
//            var popSeveral = [{path: '_education'}, {path: '_classroom'}];
            //Set up basic routes
            new Restrouter(this.app, fastighetModel, "fastighet");
            new Restrouter(this.app, brokersModel, "brokers");
            
//            new Restrouter(this.app, studentModel, "student", '_education', '_teachers'); // populate deep
//            new Restrouter(this.app, educationModel, "edu", '_teachers'); // populate one
//            new Restrouter(this.app, teacherModel, "teach", '_educations');// populate one
//            new Restrouter(this.app, bookingModel, "book", popSeveral);// populate several / two
//            new Restrouter(this.app, classModel, "class");
//            new Restrouter(this.app, loginModel, "shemalogin");
//            new Restrouter(this.app, accessModel, "access");
            //
            //
            mongoose.connect('mongodb://' + mset.host + '/' + mset.database);
            var db = mongoose.connection;
            //
            db.once('open', function () {
                console.log("Connected to MongoDB");
                JSONLoader.fillData();
            });
        }//mset.connect


        // If no other route rule fulfilled then return www/index.html
        var myIndexFile = m.path.join(__dirname, '..', 'www', 'index.html');
        this.app.get('*', (req, res) => {
            res.sendFile(myIndexFile);
        });

    }

    listen() {
        // listen on port 3000
        var me = this;
        this.app.listen(this.settings.port, function () {
            console.log("Server listening on port " + me.settings.port);
        });
    }

};


