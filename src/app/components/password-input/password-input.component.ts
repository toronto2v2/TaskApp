import { Component, Input, Output, EventEmitter } from '@angular/core';

interface propsObj {
  emptyInput: boolean,
  easy:boolean,
  medium:boolean,
  hard: boolean
}

@Component({
  selector: 'password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],

})

export class PasswordInputComponent{
  password: string = '';
  @Input () props!: propsObj;

  @Output() onChanged = new EventEmitter<string>()

  onInputChange(str: string): void {
    this.onChanged.emit(str)
  }

}
