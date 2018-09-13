import { NgModule } from '@angular/core';
//Material Design Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

//icons
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    BrowserAnimationsModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    MatCardModule
],
 
    exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    MatCardModule
],
})
export class MaterialComponentModule { }