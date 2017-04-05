module.exports = function (mongoose) {

    var shema = mongoose.Schema({
        name: {type: String, required: true},
        tel: {type: String, required: true},
        epost: {type: String, required: true},
        shortInfo: {type: String},
        image: {type: String}
        //
    },
            {collection: 'brokers'} // sets the name of Collection in Database
    );

    shema.statics.createFromJsonWithNotify = function (json, cb) {
        //
        var leftToSave = json.length;
        //
        var me = this;
        //
        json.forEach(function (act) {
            //
            var classroom = new me({
                name: act.name,
                tel: act.tel,
                epost: act.epost,
                shortInfo: act.shortInfo,
                image: act.image
            });
            //
            classroom.save(function (err, broker) {
                leftToSave--;
                if (leftToSave === 0) {
                    cb(err, "Create Brokers ready");
                }
            });
        });
    };


    shema.statics.deleteAll = function (cb) {
        return this.remove({}, cb);
    };

    /**
     *
     * @returns {array}
     */
    shema.methods.findSimilar = function (cb) {
        return this.model('brokers').find({name: this.name}, cb);
    };


    // Compile the schema to a model
    // it will result in a new collection in the database
    Model = mongoose.model('brokers', shema);
    return Model;
};