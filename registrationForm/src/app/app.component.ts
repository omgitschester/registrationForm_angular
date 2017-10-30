import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    user = {
      firstName: ' ',
      lastName: ' ',
      email: ' ',
      password: ' ',
      passwordConfirmation: ' ',
      street: ' ',
      unit: ' ',
      city: ' ',
      state: ' ',
    }
    validPassword(){
      if(this.user.password != this.user.passwordConfirmation){
        return true;
      }
      return false;
    }
    submitted: boolean = false;

    constructor(){}
    formSubmit(){
    this.submitted = true;
      }
}
