"use strict";
var router_1 = require('@angular/router');
var matches_container_component_1 = require('./matches-container.component');
var user_form_component_1 = require('./user-form.component');
var not_found_component_1 = require('./not-found.component');
var posts_component_1 = require('./posts.component');
var appRoutes = [
    {
        path: '',
        component: matches_container_component_1.MatchesContainerComponent
    },
    {
        path: 'not-found',
        component: not_found_component_1.NotFoundComponent
    },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [matches_container_component_1.MatchesContainerComponent, user_form_component_1.UserFormComponent, not_found_component_1.NotFoundComponent, posts_component_1.PostsComponent];
//# sourceMappingURL=app.routing.js.map