import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';

import { routes } from './app.route';

import { TaskService } from './app.taskservices';




@NgModule({
  imports:      [ BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpModule ],
  declarations: [ AppComponent,CreateComponent,ShowComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ TaskService ]
})
export class AppModule { }
