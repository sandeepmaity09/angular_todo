"use strict";
var create_component_1 = require('./create/create.component');
var show_component_1 = require('./show/show.component');
exports.routes = [{
        path: 'show',
        component: show_component_1.ShowComponent
    }, {
        path: 'create',
        component: create_component_1.CreateComponent
    }, {
        path: 'edit/:index',
        component: create_component_1.CreateComponent
    }, {
        path: 'create/:indexSent',
        component: create_component_1.CreateComponent
    }];
//# sourceMappingURL=app.route.js.map