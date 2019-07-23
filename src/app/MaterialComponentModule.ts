import { NgModule } from '@angular/core';


import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule],
})
export class MaterialComponentModule { }