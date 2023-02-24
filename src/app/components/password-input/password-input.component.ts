import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],

})

export class PasswordInputComponent{
  password: string = '';

  @Input () emptyInput!: boolean;
  @Input () easy!: boolean;
  @Input () medium!: boolean;
  @Input () hard!: boolean;
  @Output() onChanged = new EventEmitter<string>()

  onInputChange(str: string): void {
    this.onChanged.emit(str)
  }



}
