import { Component } from '@angular/core';

@Component({
  selector: 'test-password',
  templateUrl: './test-password.component.html',
  styleUrls: ['./test-password.component.css'],

})
export class PasswordComponent {
  password: string = '';
  emptyInput: boolean = false;
  easy: boolean = false;
  medium: boolean = false;
  hard: boolean = false;

  onChanged(str: string): void {

    const words = /[a-z]/gi.test(str);
    const digits = /\d/gi.test(str);
    const symbols = !!str.replace(/[a-z\d]/gi, '');
    const length = str.length;

    if (length < 8) {
      this.emptyInput = length > 0;
      this.easy = false;
      this.medium = false;
      this.hard = false;
      return;
    }

    this.emptyInput = false;

    if (words && digits && symbols) {
      this.easy = false;
      this.medium = false;
      this.hard = true;
      return;
    }

    if (words && digits || words && symbols || digits && symbols) {
      this.easy = false;
      this.medium = true;
      this.hard = false;
      return;
    }

    this.easy = true;
    this.medium = false;
    this.hard = false;
  }
}
