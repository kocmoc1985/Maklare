module.exports = function (mongoose) {

    // Mongoose Schema, One-to-Few relation
    var shema = mongoose.Schema({
        type: {type: String, enum: ['villa', "hyresrätt", "bostadsrätt"]}, //{type:Number,required: true,min: 1, max: 10}
        price: {type: Number, required: true},
        area: {type: Number, required: true}, //{type:Boolean,default: false}
        rooms: {type: Number, required: true},
        hyra: {type: Number, required: false},
        country: {type: String},
        lan: {type: String},
        town: {type: String},
        street: {type: String},
        zip: {type: String}
    },
            {collection: 'fastighet'} // sets the name of Collection in Database
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
                type: act.type,
                price: act.price,
                area: act.area,
                rooms: act.rooms,
                hyra: act.hyra,
                country:act.country,
                lan:act.lan,
                town:act.town,
                street:act.street,
                zip:act.zip
            });
            //
            classroom.save(function (err, cat) {
                leftToSave--;
                if (leftToSave === 0) {
                    cb(err, "Create Fastigheter ready");
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
        return this.model('fastighet').find({name: this.name}, cb);
    };


    // Compile the schema to a model
    // it will result in a new collection in the database
    Model = mongoose.model('fastighet', shema);
    return Model;
};