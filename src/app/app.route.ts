import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';

export const routes:Routes=[{
    path:'show',
    component:ShowComponent
}, {
    path:'create',
    component:CreateComponent
},{
    path:'edit/:index',
    component:CreateComponent
},{
    path:'create/:indexSent',
    component:CreateComponent
}];

