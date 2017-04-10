"use strict";
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var RestEntity = (function () {
    function RestEntity(entityName) {
        // Mocking with json
        //    this.baseUrl = './json/' + entityName + '.json';
        // Real backend/REST api
        this.baseUrl = '/rest/' + entityName;
    }
    RestEntity.prototype.httpRequest = function (type, idOrQuery, requestBody) {
        var url = this.baseUrl + '/' + idOrQuery;
        // console.log("REST_URL:", url);
        // remove trailing slahses
        while (url.substr(-1) == '/') {
            url = url.substring(0, url.length - 1);
        }
        // make request
        return this.http[type](url, requestBody)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return Observable_1.Observable.throw('Server error');
        });
    };
    RestEntity.prototype.promiseMaker = function (type, idOrQuery, requestBody) {
        var _this = this;
        if (idOrQuery === void 0) { idOrQuery = ''; }
        if (requestBody === void 0) { requestBody = undefined; }
        return new Promise(function (resolve, reject) {
            _this.httpRequest(type, idOrQuery, requestBody).subscribe(function (data) { resolve(data); }, function (error) { reject(error); });
        });
    };
    RestEntity.prototype.create = function (requestBody) {
        return this.promiseMaker('post', '', requestBody);
    };
    RestEntity.prototype.find = function (idOrQuery) {
        return this.promiseMaker('get', idOrQuery);
    };
    RestEntity.prototype.update = function (idOrQuery, requestBody) {
        return this.promiseMaker('put', idOrQuery, requestBody);
    };
    RestEntity.prototype.delete = function (idOrQuery) {
        return this.promiseMaker('delete', idOrQuery);
    };
    return RestEntity;
}());
exports.RestEntity = RestEntity;
//# sourceMappingURL=rest.class.js.map