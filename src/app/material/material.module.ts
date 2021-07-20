import {NgModule} from '@angular/core';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";

const MaterialComponents = [
  MatSelectModule,
  MatIconModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
