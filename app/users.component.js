System.register(['angular2/core', 'angular2/router', './users.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, users_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_service) {
                    this._service = _service;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getUsers()
                        .subscribe(function (users) { return _this.users = users; });
                };
                UsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    alert(JSON.stringify(user));
                    confirm('Are you sure to delete the User :' + user.name + " ?");
                    this._service.deleteUser(user.id)
                        .subscribe(function (user) { _this.users = user; window.location.reload(); });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        template: "\n        <h1>Users</h1>\n        <a [routerLink]=\"['NewUser']\" class=\"btn btn-primary\">Add User</a>\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>Edit</th>\n                    <th>Delete</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#user of users\">\n                    <td>{{ user.name }}</td>\n                    <td>{{ user.email }}</td>\n                    <td>\n                        <a [routerLink]=\"['EditUser',{id:user.id}]\"><i class=\"glyphicon glyphicon-edit\"></i> </a>\n                    </td>\n                    <td>\n                        <i class=\"glyphicon glyphicon-remove clickable\" (click)=\"deleteUser(user)\" ></i>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    ",
                        styles: ["\n            .clickable{\n                cursor:pointer;\n            }\n        "],
                        providers: [users_service_1.UserService],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UserService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map