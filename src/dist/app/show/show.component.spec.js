"use strict";
var show_component_1 = require("./show.component");
var router_1 = require("@angular/router");
var testing_1 = require("@angular/router/testing");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require('@angular/platform-browser');
var app_taskservices_1 = require("../app.taskservices");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
describe('ShowComponent', function () {
    var de;
    var comp;
    var fixture;
    var service;
    var router;
    var MockRouter = (function () {
        function MockRouter() {
        }
        MockRouter.prototype.navigate = function () {
            return Promise.resolve(true);
        };
        return MockRouter;
    }());
    var MockActivatedRouter = (function () {
        function MockActivatedRouter() {
            this.params = Observable_1.Observable.of({ '_id': 0 });
        }
        return MockActivatedRouter;
    }());
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [show_component_1.ShowComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter }, { provide: router_1.ActivatedRoute, useClass: MockActivatedRouter }, router_1.RouterOutletMap, app_taskservices_1.TaskService],
            imports: [testing_1.RouterTestingModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(show_component_1.ShowComponent);
        comp = fixture.componentInstance;
        comp.tasksArr = [{
                date: '22/11/33',
                title: 'Title',
                description: 'hello',
                priority: 'high'
            }];
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        service = fixture.debugElement.injector.get(app_taskservices_1.TaskService);
        router = fixture.debugElement.injector.get(router_1.Router);
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('it should be able to get data from service', function () {
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.of([{
                _id: '',
                date: '',
                title: '',
                description: '',
                priority: '',
            }]));
        comp.ngOnInit();
        expect(comp.retTasksArr).toEqual([{
                _id: '',
                date: '',
                title: '',
                description: '',
                priority: '',
            }]);
    });
    it('it should be able to delete data from service', function () {
        spyOn(service, 'delete').and.returnValue(Observable_1.Observable.of([{
                _id: '',
                date: '',
                title: '',
                description: '',
                priority: ''
            }]));
        comp.deleteTask(0);
        router.navigate([{}]).then(function (data) {
            expect(data).toBe(true);
        });
    });
    it('it should be able to edit data from service', function () {
        spyOn(service, 'update').and.returnValue(Observable_1.Observable.of([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: ''
            }]));
        comp.editTask(0);
        router.navigate([]).then(function (data) {
            expect(data).toBe(true);
        });
    });
});
//# sourceMappingURL=show.component.spec.js.map