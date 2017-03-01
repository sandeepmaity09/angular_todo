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
var core_1 = require("@angular/core");
var app_taskservices_1 = require("../app.taskservices");
var router_1 = require("@angular/router");
var ShowComponent = (function () {
    function ShowComponent(router, service) {
        this.router = router;
        this.service = service;
        this.retTasksArr = [];
        this.tasksArr = [];
    }
    ShowComponent.prototype.ngOnInit = function () {
        this.reload();
        console.log(JSON.stringify(this.tasksArr));
    };
    ShowComponent.prototype.reload = function () {
        var _this = this;
        this.service.getData().subscribe(function (data) {
            _this.retTasksArr = data;
            console.log(JSON.stringify(data));
            console.log(JSON.stringify(_this.retTasksArr));
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Completed");
        });
    };
    ShowComponent.prototype.editTask = function (index) {
        this.router.navigate(['create', index]);
    };
    ShowComponent.prototype.deleteTask = function (index) {
        this.service.delete(this.retTasksArr[index]._id);
        console.log('Tasks Removed');
        this.router.navigate(['create']);
    };
    ShowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: './show.component.html',
            styleUrls: ['./show.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_taskservices_1.TaskService])
    ], ShowComponent);
    return ShowComponent;
}());
exports.ShowComponent = ShowComponent;
//# sourceMappingURL=show.component.js.map