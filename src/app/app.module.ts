import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyToolbarComponent } from './my-toolbar/my-toolbar.component'

//Material Component
import {MaterialComponentModule} from './materialcomponent'


@NgModule({
  declarations: [
    AppComponent,
     MyToolbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
