module.exports = function (mongoose) {

    var shema = mongoose.Schema({
        fastighet: {type: String, required: true},
        time1: {type: String},
        time2: {type: String},
        time3: {type: String}
    },
            {collection: 'visning'} // sets the name of Collection in Database
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
                fastighet: act.fastighet,
                time1: act.time1,
                time2: act.time2,
                time3: act.time3
            });
            //
            classroom.save(function (err, broker) {
                leftToSave--;
                if (leftToSave === 0) {
                    cb(err, "Create Visningar ready");
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
    Model = mongoose.model('visning', shema);
    return Model;
};