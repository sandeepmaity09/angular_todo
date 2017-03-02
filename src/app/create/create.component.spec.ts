import { Router, ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {async, TestBed, ComponentFixture} from "@angular/core/testing";
import {By}           from '@angular/platform-browser';
import {DebugElement} from "@angular/core";
import {TaskService} from "../app.taskservices";
import {HttpModule} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {CreateComponent} from "./create.component";
import {NULL_TYPE} from "@angular/compiler/src/output/output_ast";

describe('CreateComponent', function () {
    let de: DebugElement;
    let comp: CreateComponent;
    let fixture: ComponentFixture<CreateComponent>;
    let service: TaskService;
    let router: Router;
    let route:ActivatedRoute;

    class MockRouter {
        navigate():Promise<boolean>{
            return Promise.resolve(true)
        }
    }
    class MockActivatedRoute {
        params = Observable.of<any>({'indexSent':'1'})
    }


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateComponent],
            providers: [{provide: Router, useClass: MockRouter},
                {provide: ActivatedRoute, useClass: MockActivatedRoute}, TaskService],
            imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateComponent);
        comp = fixture.componentInstance;
        comp.task = {
            date: '',
            title: '',
            description: '',
            priority: '',
        }
        de = fixture.debugElement.query(By.css('h1'));
        service = fixture.debugElement.injector.get(TaskService);
        router = fixture.debugElement.injector.get(Router);
        route=fixture.debugElement.injector.get(ActivatedRoute);
    });

    it('should create component', () => expect(comp).toBeDefined());


    it('it should be able to get data from service', () => {
        spyOn(service, 'getData').and.returnValue(
            Observable.of<any>(
                [{
                    _id:'',
                    date: '',
                    title: '',
                    description: '',
                    priority: ''
                }]
            )
        );
        comp.ngOnInit();
        expect(comp.tasks).toEqual([])
    });

/*    it('it should be able to generate error in case of error', () => {
        spyOn(console, 'error');
        spyOn(service, 'getData').and.returnValue(
            Observable.throw(Error('Observable Error Occurs'))
        );
        comp.ngOnInit();
        expect(console.error).toHaveBeenCalledWith(Error('Observable Error Occurs'));
    });*/

/*    it('it should be able to update data in case of getting router parameter', () => {
        comp.index = 0;
        spyOn(service, 'updateData').and.returnValue(
            Observable.of<any>(
                [{
                    date: '',
                    title: '',
                    description: '',
                    priority: ''
                }]
            )
        );
        comp.submit()
        expect(window.alert).toHaveBeenCalledWith('Task Updated');
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })

    });*/

/*    it('it should be able to generate error in case of on data to update', () => {
        comp.index = 0;
        spyOn(console,'error');
        spyOn(service, 'updateData').and.returnValue(
            Observable.throw(Error('Observable Error Occurs'))
        );
        comp.submit()
        expect(console.error).toHaveBeenCalled();

    });*/

/*    it('it should be able to add data in case of router parameter is not there', () => {
        comp.index= null;
        spyOn(window,'alert');
        spyOn(service, 'addData').and.returnValue(
            Observable.of<any>(
                [{
                    date: '',
                    title: '',
                    description: '',
                    priority: ''
                }]
            )
        );
        comp.submit()
        expect(window.alert).toHaveBeenCalledWith('Task Added');
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })

    });*/

/*
    it('it should be able to generate error in case of router parameter is not there', () => {
        comp.index= null;
        spyOn(console,'error');
        spyOn(service, 'addData').and.returnValue(
            Observable.throw(Error('Observable Error Occurs'))
        );
        comp.submit()
        expect(console.error).toHaveBeenCalled();

    });*/
});
