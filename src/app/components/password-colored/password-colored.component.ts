import { Component, Input } from '@angular/core';

interface propsObj {
  emptyInput: boolean,
  easy:boolean,
  medium:boolean,
  hard: boolean
}

@Component({
  selector: 'password-colored',
  templateUrl: './password-colored.component.html',
  styleUrls: ['./password-colored.component.css'],

})

export class PasswordColoredComponent{

  @Input () props!: propsObj;

}
