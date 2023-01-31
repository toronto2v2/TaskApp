import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  fullInput: boolean = false;
  easy: boolean = false;
  medium: boolean = false;
  hard: boolean = false;

  onInputChange() {
    if (this.password.length > 0 && this.password.length < 8) {
      this.fullInput = true;
    } else {
      this.fullInput = false;
    }

    if (
      this.password.length >= 8 &&
      (this.password.match(/^\d+$/g) ||
        this.password.match(/^[a-zA-Z]+$/g) ||
        this.password.match(/[^\d\sa-zA-Z]/gm))
    ) {
      this.easy = true;
    } else {
      this.easy = false;
    }

    if (
      this.password.length >= 8 &&
      (this.password.match(/(?=.*[0-9])(?=.*[a-zA-Z])/g) ||
        this.password.match(/(?=.*[a-zA-Z])(?=.*[^\d\sa-zA-Z])/g) ||
        this.password.match(/(?=.*[0-9])(?=.*[^\d\sa-zA-Z])/g))
    ) {
      this.easy = false;
      this.medium = true;
    } else {
      this.medium = false;
    }

    if (
      this.password.length >= 8 &&
      this.password.match(/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^\d\sa-zA-Z])/g)
    ) {
      this.easy = false;
      this.medium = false;
      this.hard = true;
    } else {
      this.hard = false;
    }
  }
}
