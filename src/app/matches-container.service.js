"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var MatchesContainerService = (function () {
    function MatchesContainerService(_http) {
        this._http = _http;
        this._url = "https://apiclient.resultados-futbol.com/scripts/api/api.php?tz=Europe/Madrid&format=json&req=matchsday&{{day}}&key=607e335601429fd054456af183795c18";
    }
    MatchesContainerService.prototype.getMatches = function (day) {
        var url = this._url.replace('{{day}}', day);
        return this._http.get(url)
            .toPromise()
            .then(function (resp) { return resp.json(); });
    };
    MatchesContainerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MatchesContainerService);
    return MatchesContainerService;
}());
exports.MatchesContainerService = MatchesContainerService;
//# sourceMappingURL=matches-container.service.js.map