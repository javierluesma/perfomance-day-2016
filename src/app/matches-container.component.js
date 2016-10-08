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
var matches_container_service_1 = require('./matches-container.service');
var MatchesContainerComponent = (function () {
    function MatchesContainerComponent(_matchesContainerServices) {
        this._matchesContainerServices = _matchesContainerServices;
        this.myDatePickerOptions = {
            todayBtnTxt: 'Today',
            dateFormat: 'yyyy-mm-dd',
            firstDayOfWeek: 'mo',
            sunHighlight: true,
            height: '34px',
            width: '260px',
            inline: false,
            disableUntil: { year: 2016, month: 8, day: 10 },
            selectionTxtFontSize: '16px'
        };
    }
    MatchesContainerComponent.prototype.onDateChanged = function (event) {
        this.loadMatches(event.formatted);
    };
    MatchesContainerComponent.prototype.loadMatches = function (day) {
        var _this = this;
        this._matchesContainerServices.getMatches(day)
            .then(function (matches) {
            _this.matches = matches.matches;
            console.log(matches);
        });
    };
    MatchesContainerComponent = __decorate([
        core_1.Component({
            selector: 'matches',
            template: "\n      <my-date-picker [options]=\"myDatePickerOptions\"\n           (dateChanged)=\"onDateChanged($event)\"></my-date-picker>\n    ",
            providers: [matches_container_service_1.MatchesContainerService]
        }), 
        __metadata('design:paramtypes', [matches_container_service_1.MatchesContainerService])
    ], MatchesContainerComponent);
    return MatchesContainerComponent;
}());
exports.MatchesContainerComponent = MatchesContainerComponent;
//# sourceMappingURL=matches-container.component.js.map