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
var taskdetails_1 = require('../taskdetails');
var app_taskservices_1 = require("../app.taskservices");
var router_1 = require("@angular/router");
var CreateComponent = (function () {
    function CreateComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        //taskArr:Tasks[] = [];
        this.tasks = [];
        this.task = new taskdetails_1.Tasks();
        this.filler = '';
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.index = +data.indexSent;
            if (_this.index || _this.index === 0) {
                _this.service.getData().subscribe(function (data) {
                    _this.task = data[_this.index];
                    console.log(JSON.stringify(data));
                }, function (err) { return alert(err); }, function () {
                    console.log('Success');
                });
            }
        });
    };
    CreateComponent.prototype.submit = function () {
        if (this.index || this.index === 0) {
            this.service.update(this.task);
        }
        else {
            this.service.add(this.task);
        }
        this.router.navigate(['show']);
    };
    CreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, app_taskservices_1.TaskService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map