import { NgModule } from '@angular/core';
//Material Design Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

//icons
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    BrowserAnimationsModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule],
 
    exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule],
})
export class MaterialComponentModule { }