import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
//Material Component
import {MaterialComponentModule} from './materialcomponent';

import { AppComponent } from './app.component';

//My Component
import { MyToolbarComponent } from './my-toolbar/my-toolbar.component'
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'


@NgModule({
  declarations: [
    AppComponent,
     MyToolbarComponent,
     HomeComponent,
     InfoComponent,
     NotFoundComponent,
     AboutComponent,
     ContactComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponentModule,
  //  FormsModule,
  //  ReactiveFormsModule,
  //  HttpModule
  RouterModule.forRoot([
{path:'', component: HomeComponent },
{path:'home', component: HomeComponent },
{path:'contact', component: ContactComponent },
{path:'about', component: AboutComponent },
{path:'info', component: InfoComponent },
{path:'**', component: NotFoundComponent },
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
