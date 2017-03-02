import {ShowComponent} from "./show.component";
import {RouterOutletMap, Router, ActivatedRoute} from "@angular/router";
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

describe('ShowComponent', function () {
    let de: DebugElement;
    let comp: ShowComponent;
    let fixture: ComponentFixture<ShowComponent>;
    let service: TaskService;
    let router: Router;

    class MockRouter {
        navigate():Promise<boolean>{
            return Promise.resolve(true)
        }
    }

    class MockActivatedRouter {
        params = Observable.of<any>({'_id':0})
    }


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShowComponent],
            providers: [{provide: Router, useClass: MockRouter},{provide:ActivatedRoute,useClass:MockActivatedRouter}, RouterOutletMap, TaskService],
            imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShowComponent);
        comp = fixture.componentInstance;
        comp.tasksArr = [{
            date: '22/11/33',
            title: 'Title',
            description: 'hello',
            priority: 'high'
        }]
        de = fixture.debugElement.query(By.css('h1'));
        service = fixture.debugElement.injector.get(TaskService);
        router = fixture.debugElement.injector.get(Router);
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
                    priority: '',
                }]
            )
        );
        comp.ngOnInit();
        expect(comp.retTasksArr).toEqual([{
            _id:'',
            date: '',
            title: '',
            description: '',
            priority: '',
        }])
    });

/*    it('it should be able to delete data from service',() =>{
        spyOn(service,'delete').and.returnValue(
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
        comp.deleteTask(0);
        router.navigate([{}]).then(data => {
            expect(data).toBe(true);
        })
    });*/

    it('it should be able to edit data from service',() =>{
        spyOn(service,'update').and.returnValue(
            Observable.of<any>(
                [{
                    date: '',
                    title: '',
                    description: '',
                    priority: '',
                    _id: ''
                }]
            )
        );
        comp.editTask(0);
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })

    });

});
