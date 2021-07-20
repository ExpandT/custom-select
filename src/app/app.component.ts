import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  select = new FormControl('');

  constructor() {
    this.select.valueChanges.pipe(tap(()=> console.log(this.select.value))).subscribe()
  }
}
