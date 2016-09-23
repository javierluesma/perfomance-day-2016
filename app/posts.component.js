System.register(['angular2/core', './spinner.component', './users.service', './posts.services'], function(exports_1, context_1) {
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
    var core_1, spinner_component_1, users_service_1, posts_services_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (posts_services_1_1) {
                posts_services_1 = posts_services_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postServices, _userService) {
                    this._postServices = _postServices;
                    this._userService = _userService;
                    this.posts = [];
                    this.users = [];
                    this.postsLoading = true;
                    this.isLoadingComments = true;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadPosts();
                    this.loadUsers();
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) { return _this.users = users; });
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this._postServices.getPosts(filter)
                        .subscribe(function (posts) { return _this.posts = posts; }, null, function () { return _this.postsLoading = false; });
                };
                PostsComponent.prototype.reloadPost = function (userId) {
                    this.postsLoading = true;
                    this.currentPost = null;
                    this.loadPosts(userId);
                };
                PostsComponent.prototype.select = function (post) {
                    var _this = this;
                    this.currentPost = post;
                    this.isLoadingComments = true;
                    this._postServices.getComments(post.id)
                        .subscribe(function (comments) { return _this.comments = comments; }, null, function () { return _this.isLoadingComments = false; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        template: "\n        <h1>Posts Page</h1>\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <select class=\"form-control\" (change)=\"reloadPost({userId: u.value})\" #u>\n                    <option value=\"\">select user..</option>\n                    <option *ngFor=\"#user of users\" value={{user.id}}> \n                        {{user.name}} \n                    </option>\n                </select>\n\n                <spinner [visible]=\"postsLoading\"></spinner>\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" [class.active]=\"currentPost == post\" \n                        *ngFor=\"#post of posts\" (click)=\"select(post)\">{{ post.title }}</li>\n                </ul>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"panel panel-default\" *ngIf=\"currentPost\">\n                    \n                    <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\">{{ currentPost.title }} </h3>\n                    </div>\n                    <div class=\"panel-body\"> {{ currentPost.body }} </div>\n\n                    <hr>\n                    <spinner [visible]=\"isLoadingComments\"></spinner>\n                    <div class=\"media\" *ngFor=\"#comment of comments\">\n                        <div class=\"media-left\">\n                            <a href=\"#\">\n                            <img class=\"media-object img-circle\" src=\"http://lorempixel.com/80/80/people?random={{ comment.id }}\" alt=\"...\">\n                            </a>\n                        </div>\n                        <div class=\"media-body\">\n                            <h4 class=\"media-heading\">{{ comment.name }}</h4>\n                            {{comment.body}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
                        styles: ["\n        .posts li { cursor: default; }\n        .posts li:hover { background: #ecf0f1; } \n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n            background-color: #ecf0f1;\n            border-color: #ecf0f1; \n            color: #2c3e50;\n        }\n    "],
                        directives: [spinner_component_1.SpinnerComponent],
                        providers: [posts_services_1.PostServices, users_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [posts_services_1.PostServices, users_service_1.UserService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map