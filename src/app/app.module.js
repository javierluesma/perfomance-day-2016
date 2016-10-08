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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('./rxjs-extensions');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var navbar_component_1 = require('./navbar.component');
var matches_container_component_1 = require('./matches-container.component');
var users_component_1 = require('./users.component');
var users_service_1 = require('./users.service');
var user_form_component_1 = require('./user-form.component');
var not_found_component_1 = require('./not-found.component');
var spinner_component_1 = require('./spinner.component');
var posts_component_1 = require('./posts.component');
var mydatepicker_1 = require('mydatepicker');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule,
                mydatepicker_1.MyDatePickerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavBarComponent,
                matches_container_component_1.MatchesContainerComponent,
                users_component_1.UsersComponent,
                user_form_component_1.UserFormComponent,
                not_found_component_1.NotFoundComponent,
                posts_component_1.PostsComponent,
                spinner_component_1.SpinnerComponent,
                app_routing_1.routedComponents
            ],
            providers: [
                users_service_1.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map