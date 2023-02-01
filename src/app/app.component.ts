import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  emptyInput: boolean = false;
  easy: boolean = false;
  medium: boolean = false;
  hard: boolean = false;


  onInputChange(str: string): void{
    const words = /[a-z]/gi.test(str)
    const digits = /\d/gi.test(str)
    const simb = !!str.replace(/[a-z\d]/gi, '')
    const length = str.length

    this.emptyInput = length > 0 && length < 8? this.emptyInput = true : this.emptyInput = false;

    this.easy = length >= 8 && (words || digits || simb) ? this.easy = true : this.easy = false ;

    if(length >= 8 && (words && digits || words && simb || digits && simb)){
      this.easy = false;
      this.medium = true;
    }else{
      this.medium = false;
    }

    if(length >= 8 && words && digits && simb){
      this.easy = false;
      this.medium = false;
      this.hard = true;
    }else{
      this.hard = false;
    }

  }

}

