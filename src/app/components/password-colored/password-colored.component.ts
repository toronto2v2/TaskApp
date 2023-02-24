import { Component, Input } from '@angular/core';

@Component({
  selector: 'password-colored',
  templateUrl: './password-colored.component.html',
  styleUrls: ['./password-colored.component.css'],

})

export class PasswordColoredComponent{

  @Input () emptyInput!: boolean;
  @Input () easy!: boolean;
  @Input () medium!: boolean;
  @Input () hard!: boolean;

}
