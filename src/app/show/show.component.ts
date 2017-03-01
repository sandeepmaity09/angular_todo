import {Component, OnInit} from "@angular/core";
import {TaskService} from "../app.taskservices";
import {RetTask} from "../returntaskdetails";
import {Router} from "@angular/router";
import {Tasks} from "../taskdetails";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

    task: RetTask;
    task2: Tasks;
    retTasksArr:RetTask[] = [];
    tasksArr:Tasks[] = [];

    constructor(private router:Router,private service:TaskService){}

    ngOnInit() {
        this.reload();
        console.log(JSON.stringify(this.tasksArr));
    }

    reload() {
        this.service.getData().subscribe(data => {
            this.retTasksArr = data;
            console.log(JSON.stringify(data))
            console.log(JSON.stringify(this.retTasksArr))
        }, (err: any) => {
            console.log(err)
        }, () => {
            console.log("Completed");
        });
    }

    editTask(index:number){
        this.router.navigate(['create',index])
    }

    deleteTask(index:number){
        this.service.delete(this.retTasksArr[index]._id);
        console.log('Tasks Removed')
        this.router.navigate(['create'])
    }
}