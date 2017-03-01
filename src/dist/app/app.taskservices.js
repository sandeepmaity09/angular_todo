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
var http_1 = require("@angular/http");
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getData = function () {
        var _this = this;
        var jsonHeader = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:9000/get/all', { headers: jsonHeader })
            .map(function (data) {
            return _this.extractData(data);
        });
        // .catch((e:any)=>{
        // return Observable.throw<any>(new Error("error"))
        // })
    };
    // addData(task: Tasks): Observable<any> {
    //
    //     let jsonHeader = new Headers({
    //         'Content-Type':'application/json'
    //     });
    //
    //     let obj ={
    //         date:task.date,
    //         title:task.title,
    //         description:task.descrip,
    //         priority:task.priority
    //     }
    //
    //     return this.http.post('http://localhost:9000/add',obj,{headers:jsonHeader})
    //         .map(data => {
    //             return this.extractData(data)
    //         })
    //         .catch(e => {
    //             return this.handleError(e)
    //         })
    // }
    TaskService.prototype.add = function (task) {
        this.addData(task).subscribe(function (data) {
            console.log("Success subscribe");
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Completed");
        });
    };
    TaskService.prototype.delete = function (index) {
        this.deleteData(index).subscribe(function (data) {
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Completed.");
        });
    };
    TaskService.prototype.update = function (task) {
        this.updateData(task).subscribe(function (data) {
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Completed.");
        });
    };
    TaskService.prototype.deleteData = function (id) {
        var _this = this;
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:9000/remove/' + id, { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        });
    };
    TaskService.prototype.addData = function (task) {
        var _this = this;
        var jsonHeader = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var obj = {
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };
        return this.http.post('http://localhost:9000/add', obj, { headers: jsonHeader })
            .map(function (data) {
            console.log("Success");
            return _this.extractData(data);
        })
            .catch(function (e) {
            console.log("failed");
            return _this.handleError(e);
        });
    };
    TaskService.prototype.updateData = function (task) {
        var _this = this;
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var obj = {
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };
        return this.http.post('http://localhost:9000/update', obj, { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) {
            console.log("Something went wrong with post.");
            return _this.handleError(e);
        });
    };
    TaskService.prototype.extractData = function (result) {
        var body = result.json();
        return body;
    };
    TaskService.prototype.handleError = function (error) {
        var errorMsg;
        try {
            if (JSON.parse(error._body).message) {
                errorMsg = JSON.parse(error._body).message;
            }
            else {
                errorMsg = 'Something went wrong. Please try again later';
            }
        }
        catch (er) {
            errorMsg = 'Something went wrong. Please try again after some time';
        }
        return Observable_1.Observable.throw(new Error(errorMsg));
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=app.taskservices.js.map