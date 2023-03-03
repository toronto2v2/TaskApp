import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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

export class PasswordInputComponent implements OnInit{
  password!: FormControl

  @Input () props!: propsObj;
  @Output() onChanged = new EventEmitter<string>()

  ngOnInit(){
    this.password = new FormControl('');
    this.password.valueChanges.subscribe( str => this.onInputChange(str))
  }

  onInputChange(str: string): void {
    this.onChanged.emit(str)
  }

}
