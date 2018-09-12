import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
//icons
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule],
})
export class MaterialComponentModule { }