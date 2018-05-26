import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {MongoService} from "./service/mongo.service";
import {MongoComponent} from "./component/mongo.component";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    MongoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MongoService],
  bootstrap: [MongoComponent]
})
export class AppModule { }
