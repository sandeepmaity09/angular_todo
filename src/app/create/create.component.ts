import {Component,OnInit} from '@angular/core';
import {Tasks} from '../taskdetails';
import {TaskService} from "../app.taskservices";
import {Router, ActivatedRoute} from "@angular/router";
import {RetTask} from "../returntaskdetails";

@Component({
    moduleId:module.id,
    selector:'home',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

    //taskArr:Tasks[] = [];

    tasks:RetTask[] = [];
    task:Tasks = new Tasks();
    filler:string = ''
    index:number;

    constructor(private router:Router,private route:ActivatedRoute,private service:TaskService){}

    ngOnInit() {
        this.route.params.subscribe((data: any) => {
            this.index = +data.indexSent;
            if (this.index || this.index === 0) {
                this.service.getData().subscribe((data: any) => {
                        this.task = data[this.index]
                        console.log(JSON.stringify(data))
                    },
                    (err: any) => alert(err), () => {
                        console.log('Success')
                    });
            }
        });
    }


    submit() {
        if (this.index || this.index === 0) {
            this.service.update(this.task)
        } else {
            this.service.add(this.task)
        }
        this.router.navigate(['show']);
    }

}

