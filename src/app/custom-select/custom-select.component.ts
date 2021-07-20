import {Component} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: CustomSelectComponent
  }]
})
export class CustomSelectComponent {

  selectDropdown = new FormControl('');

  itemList = [
    {name: "Item 1"},
    {name: "Item 2"},
    {name: "Item 3"}
  ]

  onChange = (value: string) => {
  }

  writeValue(value: string): void {
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  get arrowState(): string {
    if (this.selectDropdown) {
      return 'expand_more';
    }
    return 'expand_less';
  }

  constructor() {
    this.selectDropdown.valueChanges.pipe(tap((res) => {
      this.onChange(res);
      console.log(res);
    })).subscribe()
  }

  isSelected(option: string): boolean {
    return this.selectDropdown.value === option;
  }

  showAlert() {
    alert("Some text");
  }
}
